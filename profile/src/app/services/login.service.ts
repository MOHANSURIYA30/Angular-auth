import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from "src/environments/environment";

const BACKEND_URL = environment.apiUrl +'login';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http:HttpClient,private router:Router) { }

  loginUser = async(obj:any) => new Promise<any>((resolve, rejects) => {
    const data: any = obj;
    console.log(data);
    
    this.http.post<any>(BACKEND_URL, data)
      .subscribe(
        response => {
          resolve(response);
        },
        error => {
          rejects(error);
        }
      );
  })  

  loggedIn()
  {
    return !!localStorage.getItem('token');
  }

  logOut()
  {
    localStorage.removeItem('token');
    this.router.navigate(['events']);

  }
  getToken()
  {
    return localStorage.getItem('token');
  }

}
