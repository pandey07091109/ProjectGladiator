import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-demo',
  templateUrl: './ng-demo.component.html',
  styleUrls: ['./ng-demo.component.css']
})
export class NgDemoComponent implements OnInit {
  getColor(country) {
    switch (country) {
      case 'UK':
        return 'green';
      case 'USA':
        return 'blue';
      case 'HK':
        return 'red';
    }
  }
  people: any[] = [
    {
      "name": "Mayank",
      "country": 'UK'
    },
    {
      "name": "Shreya",
      "country": 'USA'
    },
    {
      "name": "Khushi",
      "country": 'HK'
    },
    {
      "name": "Kawal",
      "country": 'UK'
    },
    {
      "name": "Sonali",
      "country": 'India'
    }
  ];

  


  constructor() { }

  ngOnInit(): void {
  }

}
