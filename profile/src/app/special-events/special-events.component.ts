import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {
  specialData:any
  constructor(private eventService:EventsService,
               private router:Router) { }

  ngOnInit(): void {

    this.eventService.getSpecialEvents()
    .then((res)=>{ console.log(res);
    this.specialData = res;})

    .catch((err)=>{
      console.log(err);
      if(err instanceof HttpErrorResponse)
      {
        if(err.status === 401)
        {
       this.router.navigate(['login']);   
        }
      }
    })
  }

}
