import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../model/event';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
})
export class ListEventsComponent implements OnInit {
  events : Event[];
  eventActif : Event;

  activerEvent(event : Event){
    this.eventActif = event;
  }

  cacherDetails(){
    this.eventActif = null;
  }

  constructor(private serviceEvent : EventService) { }

  ngOnInit(): void {
    this.serviceEvent.addEvent(new Event(1, "Event 1", "Paris", new Date("10-20-2020"), new Date("11-08-2020")));
    this.serviceEvent.addEvent(new Event(2, "Event 2", "Lyon", new Date("06-10-2020"), new Date("07-01-2020")));
    this.serviceEvent.addEvent(new Event(3, "Event 3", "Marseille", new Date("09-16-2020"), new Date("09-22-2020")));
    this.events = this.serviceEvent.getEvents();

  }

}
