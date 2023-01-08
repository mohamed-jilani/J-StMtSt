import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { CanActivate } from '@angular/router';
@Injectable()
export class ActivateService implements CanActivate{
 constructor(public _userService: ApiService){}
 canActivate() {
 return this._userService.authenticated;
}
}
