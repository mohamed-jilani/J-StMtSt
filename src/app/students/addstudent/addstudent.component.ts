import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { studentdata } from '../model/student.model';


@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  studentmodelobj : studentdata = new studentdata;

  formValue !:FormGroup;


  constructor(private formBuilder:FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
    this.formValue=this.formBuilder.group({
      name:['',Validators.required],
      email: ['',Validators.required],
      mobile:['',Validators.required],
      city:['',Validators.required]
    })
  }

addstudent(){
  this.studentmodelobj.name = this.formValue.value.name;
  this.studentmodelobj.mobile = this.formValue.value.mobile;
  this.studentmodelobj.email = this.formValue.value.email;
  this.studentmodelobj.city = this.formValue.value.city;

  this.api.poststudent(this.studentmodelobj).subscribe(res=>{
    console.log(res)
    this.formValue.reset()
    alert("Record added sucessfully");
  },
  err=>{
    alert("something are wrong!!!");
  })
}


}
