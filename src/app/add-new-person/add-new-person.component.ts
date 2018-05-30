import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Person, PersonsService } from '../persons.service';

@Component({
  selector: 'app-add-new-person',
  templateUrl: './add-new-person.component.html',
  styleUrls: ['./add-new-person.component.css']
})
export class AddNewPersonComponent implements OnInit {

  @ViewChild('closeBtn') closeBtn: ElementRef;

  public newPerson: Person;

  constructor(private personsService: PersonsService) {
  }

  ngOnInit() {
    this.newPerson = new Person();
  }

  onSubmit() {
    if (this.newPerson.name && this.newPerson.address) {
      this.personsService.add(this.newPerson)
        .then(() => {
          this.newPerson = new Person();
        });

      this.closeBtn.nativeElement.click();

    } else {
      alert('need to fill all the fields');
    }
  }
}

