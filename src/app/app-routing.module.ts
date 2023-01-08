import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { StudentComponent } from './students/student/student.component';
import { AddstudentComponent } from './students/addstudent/addstudent.component';
import { ActivateService } from './auth/shared/activate.service';
import { ApiService } from './auth/shared/api.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EditComponent } from './students/edit/edit.component';

const routes: Routes = [
  { path:'login' , component:LoginComponent ,canActivate: []},
  { path:'student' , component:StudentComponent ,canActivate: [ActivateService]},
  { path:'addstudent' , component:AddstudentComponent ,canActivate: [ActivateService]},
  { path:'editstudent/:indice' , component:EditComponent ,canActivate: [ActivateService]},
  {path : '' ,redirectTo:'student' , pathMatch :'full'},
  {path : '**' ,component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 providers: [ApiService, ActivateService]

})
export class AppRoutingModule { }
