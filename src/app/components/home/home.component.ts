import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
Fname:string='Rishi';
Lname:string='Pandey';
Age:number=22;
Gender:string='Male';
  constructor() { }

  ngOnInit(): void {
  }

}
