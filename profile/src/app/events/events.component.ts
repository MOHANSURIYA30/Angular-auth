import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  eventData:any;
  constructor(private eventService:EventsService) { }
   
  ngOnInit(): void {

    this.eventService.getEvents()
    .then((res)=>{ 
      console.log(res);
    this.eventData = res;
    })
    .catch((err)=>{console.log(err);
    })
  }

}
