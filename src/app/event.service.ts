import { Injectable } from '@angular/core';
import { Event } from './model/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  events : Event[];

  constructor() {
    this.events = [];
  }

  createEvent(id, titre, lieu, date_debut, date_fin){
    let event  = new Event(id, titre, lieu, date_debut, date_fin);
    return event;
  }

  getEvents(){
    return this.events;
  }

  getEvent(indice : number){
    return this.events[indice];
  }

  addEvent(event : Event){
    this.events.push(event);
  }

  editEvent(indice : number, event : Event){
    this.events[indice] = event;
  }

  deleteEvent(indice : number){
    this.events.splice(indice, 1);
  }


}
