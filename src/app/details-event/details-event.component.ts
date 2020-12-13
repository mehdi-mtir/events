import { Component, Input, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../model/event';

@Component({
  selector: 'app-details-event',
  templateUrl: './details-event.component.html',
  styleUrls: ['./details-event.component.css']
})
export class DetailsEventComponent implements OnInit {
  @Input() event;

  constructor() { }

  ngOnInit(): void {

  }

}
