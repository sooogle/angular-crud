import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';

import { EmployeeData } from './common/EmployeeData';
import { EmployeeService } from './common/EmployeeService';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(EmployeeData)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
