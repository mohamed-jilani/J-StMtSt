import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { StudentComponent } from './students/student/student.component';
import { AddstudentComponent } from './students/addstudent/addstudent.component';

import { ActivateService } from './shared/activate.service';
import { ApiService } from './shared/api.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path:'login' , component:LoginComponent ,canActivate: []},
  { path:'signup' , component:SignupComponent ,canActivate: []},
  { path:'student' , component:StudentComponent ,canActivate: [ActivateService]},
  { path:'addstudent' , component:AddstudentComponent ,canActivate: [ActivateService]},
  {path : '' ,redirectTo:'login' , pathMatch :'full'},
  {path : '**' ,component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 providers: [ApiService, ActivateService]

})
export class AppRoutingModule { }
