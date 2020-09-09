import { Injectable } from '@angular/core';
import {Event} from 'src/app/Model/event';


@Injectable({
  providedIn: 'root'
})
export class EventService {
  events:Event[]= [
    { id:1, name: 'Angular', description: 'Angular Event', speaker: 'Rishi' },
    { id:2, name: 'React', description: 'React Event', speaker: 'Saurav' },
    { id:3, name: 'Java', description: 'Java Event', speaker: 'Rashmi' }
];
  
getEvents() {
  return this.events;
}
deleteEvent(events:Event){
 
  const id=this.events.indexOf(events);
   this.events.splice(id,1);
}
addEvent(eventName:string,desc:string,speaker:string) { 
  let newEvent= { id: this.events.length+1,
   name: eventName, description:desc, speaker: speaker };
   return this.events.push(newEvent);
}
  

  constructor() { }
}
