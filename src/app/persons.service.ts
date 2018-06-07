import { Injectable } from '@angular/core';
import Backendless from 'backendless';

export class Person {
  public objectId?: string;
  public name: string;
  public address: string;
}

const PersonsStore = Backendless.Data.of(Person);

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  public persons: Person[] = [];

  loadAll(): void {
    PersonsStore.find<Person>().then((persons: Person[]) => {
      this.persons = persons;

      this.addRealTimeListeners();
    });
  }

  add(newPerson: Person): Promise<Person> {
    return PersonsStore.save<Person>(newPerson);
  }

  addRealTimeListeners(): void {
    const rtHandlers: Backendless.EventHandler = PersonsStore.rt();

    rtHandlers.addCreateListener<Person>(this.onPersonAdd.bind(this));
    rtHandlers.addUpdateListener<Person>(this.onPersonChange.bind(this));
    rtHandlers.addDeleteListener<Person>(this.onPersonRemove.bind(this));
  }

  onPersonAdd(newPerson: Person): void {
    this.persons.push(newPerson);
  }

  onPersonChange(updatedPerson: Person): void {
    this.persons = this.persons.map(person => {
      return updatedPerson.objectId === person.objectId
        ? updatedPerson
        : person;
    });
  }

  onPersonRemove(oldPerson: Person): void {
    this.persons = this.persons.filter(person => {
      return oldPerson.objectId !== person.objectId;
    });
  }
}
