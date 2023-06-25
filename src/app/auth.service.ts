import { Injectable } from '@angular/core';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user:any

  private_registerUrl ="http://localhost:3000/api/register";
  private_loginUrl = "http://localhost:3000/api/login";
  private_gridUrl ="http://localhost:3000/api/grid";
  private_getUrl ="http://localhost:3000/api/getdata";
  private_updateUrl ="http://localhost:3000/api/getupdate";
  private_getdatanewUrl ="http://localhost:3000/api/getdatanew";
  private_deleteUrl ="http://localhost:3000/api/delete";
  private_getflightUrl ="http://localhost:3000/api/getflightdata";

  constructor(private http:HttpClient) {}
    
    
    register(user:any=[]){
      console.log(user)
      return this.http.post<any[]>(this.private_registerUrl,user)
    }

    login(user:any=[]){
      console.log(user)
      return this.http.post<any[]>(this.private_loginUrl,user)
    }

    grid(user:any=[]){
      console.log(user)
      return this.http.post<any[]>(this.private_gridUrl,user)
    }

    getdata(user:any=[]){
      console.log(user)
      return this.http.post<any[]>(this.private_getUrl,user)
    }

    getdatanew(user:any){
      console.log(user)
      return this.http.post<any[]>(this.private_getdatanewUrl,user)
    }

    getupdate(user:any){
      console.log("updates[Auth]",user)
      return this.http.post<any[]>(this.private_updateUrl,user)
    }
    delete(user:any):Observable<object>{
      console.log("Delete[Auth]",user)
      return this.http.post<any[]>(this.private_deleteUrl,user)
    }

    getflightdata(user:any=[]){
      console.log(user)
      return this.http.post<any[]>(this.private_getflightUrl,user)
    }




  }



