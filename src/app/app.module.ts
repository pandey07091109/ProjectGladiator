import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { GenderPipe } from './pipes/gender.pipe';
import { AboutComponent } from './components/about/about.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import {HttpClientModule} from '@angular/common/http';
import { AddUserComponent } from './components/add-user/add-user.component';
import { NgDemoComponent } from './components/ng-demo/ng-demo.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    EmployeeComponent,
    GenderPipe,
    AboutComponent,
    EmployeelistComponent,
    ReactiveFormComponent,
    UserComponent,
    AddUserComponent,
    NgDemoComponent,
   
   
  
   
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
