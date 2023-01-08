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
      lastname: ['',Validators.required],
      class:['',Validators.required],
    })
  }

addstudent(){
  this.studentmodelobj.name = this.formValue.value.name;
  this.studentmodelobj.lastname = this.formValue.value.lastname;
  this.studentmodelobj.class = this.formValue.value.class;

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
