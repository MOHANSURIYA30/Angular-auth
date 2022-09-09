import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from "src/environments/environment";

const BACKEND_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http:HttpClient) { }

  getEvents = async() => new Promise<any>((resolve, rejects) => {
    
    this.http.get<any>(BACKEND_URL+"event")
      .subscribe(
        response => {
          resolve(response);
        },
        error => {
          rejects(error);
        }
      );
  })  

  getSpecialEvents = async() => new Promise<any>((resolve, rejects) => {
    
    this.http.get<any>(BACKEND_URL+"special")
      .subscribe(
        response => {
          resolve(response);
        },
        error => {
          rejects(error);
        }
      );
  }) 


}
