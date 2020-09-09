import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {UserService} from 'src/app/services/user.service';
import {User} from 'src/app/Model/User';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  addForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private service:UserService) { }

  ngOnInit(): void {
    this.addForm=this.formBuilder.group({
      id:[],
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",[Validators.required,Validators.email]]
    })
  }

  //For Adding the values entered from user 
  
  onSubmit(form:User)
  {
    console.log(form);

    this.service.addUser(form).subscribe(data=>
      {
      console.log(data)
      alert("User Added Successfully");
      
    })
    }

  }
  


