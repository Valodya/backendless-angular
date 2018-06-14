import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Backendless from 'backendless';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { PersonsListComponent } from './persons-list/persons-list.component';
import { AddNewPersonComponent } from './add-new-person/add-new-person.component';
import { ConnectionsCounterComponent } from './connections-counter/connections-counter.component';

Backendless.initApp(environment.backendless.APP_ID, environment.backendless.API_KEY);

@NgModule({
  declarations: [
    AppComponent,
    PersonsListComponent,
    AddNewPersonComponent,
    ConnectionsCounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
