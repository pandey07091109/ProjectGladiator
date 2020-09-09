import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { AboutComponent } from './components/about/about.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { UserComponent } from './components/user/user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { NgDemoComponent } from './components/ng-demo/ng-demo.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'emp', component:EmployeeComponent},
  {path:'emplist',component:EmployeelistComponent},
  {path:'reacform',component:ReactiveFormComponent},
  {path:'user',component:UserComponent},
  {path:'adduser',component:AddUserComponent},
  {path:'ngdemo',component:NgDemoComponent}
  
 
 
 
 
 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
