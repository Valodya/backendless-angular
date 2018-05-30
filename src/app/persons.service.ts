import { Injectable } from '@angular/core';
import Backendless from 'backendless';

export class Person {
  public name: string;
  public address: string;
}

const PersonsStore = Backendless.Data.of(Person);

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  public persons: Person[] = [];

  loadAll() {
    PersonsStore.find<Person>().then((persons: Person[]) => {
      this.persons = persons;
    });
  }

  add(newPerson: Person) {
    return PersonsStore.save<Person>(newPerson).then((savedPerson: Person) => {
      this.persons.push(savedPerson);
    });
  }
}
