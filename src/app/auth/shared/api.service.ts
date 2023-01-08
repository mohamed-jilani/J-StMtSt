import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }

  private _authenticated: boolean = false;

  get authenticated(): boolean{
    return this._authenticated;
    }

    gauthenticated(): boolean{
      return this._authenticated;
      }
  set authenticated(v:boolean){
    this._authenticated=v;
    }
    sauthenticated(v:boolean){
      this._authenticated=v;
      }




}
