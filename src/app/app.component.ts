import { Component } from '@angular/core';
import { ApiService } from './shared/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'json-crud';
  constructor(public _apiService: ApiService){}

  logout(){
    this._apiService.sauthenticated(false);
   }
}
