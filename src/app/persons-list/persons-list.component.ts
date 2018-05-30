import { Component, OnInit } from '@angular/core';
import { Person, PersonsService } from '../persons.service';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent implements OnInit {

  constructor(private personsService: PersonsService) {
  }

  ngOnInit() {
    this.personsService.loadAll();
  }

  get persons(): Person[] {
    return this.personsService.persons;
  }
}

