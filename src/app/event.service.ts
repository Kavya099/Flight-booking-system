import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EventService {


  private_eventsUrl ="https:///localhost:3000/events";
  private_specialEventsUrl = "https://localhost:3000/special";
  
  constructor(private http: HttpClient) { }


  getEvents(){

    return this.http.get<any>(this.private_eventsUrl)
  }


  getSpecialEvents(){
    return this.http.get<any>(this.private_specialEventsUrl)
  }


}
