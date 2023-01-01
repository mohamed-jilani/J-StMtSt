import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { studentdata } from '../model/student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
//hide
  showupdate : boolean = false;

  studentmodelobj : studentdata = new studentdata;

  formValue !:FormGroup;

  allstudentdata :any;

  constructor(private formBuilder:FormBuilder, private api:ApiService) { this.getdata();}

  ngOnInit(): void {
    this.formValue=this.formBuilder.group({
      name:['',Validators.required],
      email: ['',Validators.required],
      mobile:['',Validators.required],
      city:['',Validators.required]
    })
    this.getdata()
  }



edit(data:any){
  this.showupdate=true;
  this.studentmodelobj.id=data.id;
  this.formValue.controls['name'].setValue(data.name);
  this.formValue.controls['email'].setValue(data.email);
  this.formValue.controls['mobile'].setValue(data.mobile);
  this.formValue.controls['city'].setValue(data.city);
}

  //update on edit
  update(){
    this.studentmodelobj.name = this.formValue.value.name;
    this.studentmodelobj.mobile = this.formValue.value.mobile;
    this.studentmodelobj.email = this.formValue.value.email;
    this.studentmodelobj.city = this.formValue.value.city;

    this.api.updatestudent(this.studentmodelobj,this.studentmodelobj.id).subscribe(res=>{
      this.formValue.reset();
      alert("Record updated sucessfully");
      this.showupdate=false;
      this.getdata();
    },
    err=>{
      alert("something went wrong!!!");
    })
  }

//getdata

getdata(){
  this.api.getstudent()
  .subscribe(res=>{
    this.allstudentdata=res;
  })
}

//deletestudent
deletestudent(data :any){
  if(confirm('Are yous sure to delete ?'))
  this.api.deletestudent(data.id)
  .subscribe(res=>{
    alert("deleted sucessfully");
    this.getdata();
  })
}
}
