import { Component, OnInit } from '@angular/core';
import {Product} from '../../Model/Product';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  Subjects: string[] = ["Angular", "Java", "Dotnet"];
  ShowFaculy: boolean = true;
  FacultyName: string = "Rishi";
  employees:any[]=[
    {
      code: 'emp101', name: 'Rishi', gender: 'Male',
      annualSalary: 5500, dateOfBirth: '05/16/1988'
    },
    {
      code: 'emp102', name: 'Rashmi', gender: 'Female',
      annualSalary: 5500, dateOfBirth: '05/16/1988'
    },
    {
      code: 'emp103', name: 'Aakash', gender: 'Male',
      annualSalary: 5500, dateOfBirth: '05/16/1988'
    }
  ];

  id:number=10;
  name:string="IPhone";
  cost:number=100000;
  category:string="Electronics";

  pro:Product = {id:11,name:"Note8",cost:43434,category:'Electronics'};

  products:Product[]=[
    {id:11,name:"Note8",cost:43434,category:'Electronics'},
    {id:12,name:"Keyboard",cost:3434,category:'Electronics'},
    {id:13,name:"Chair",cost:4434,category:'Furniture'}
  ];


  myFunction() {
    alert("You Clicked Me");
  }
  //Function with parameters
  deleteProduct(id: number) {
    alert("Product to be deleted" + id)
  }
  editProduct(id: number, name: string) {
    alert(`Product to be edited ${id} and ${name}`);
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
