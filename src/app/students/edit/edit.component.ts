import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { studentdata } from '../model/student.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
  constructor(
    private formBuilder:FormBuilder,
    private api:ApiService,
    private router : Router,
    private route : ActivatedRoute) {}

  student!: any;
  indice : number=0;
  data : any;

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.indice = params['indice'];
        this.student = this.api.getstudentSp(this.indice);
      }
    )
  }


  studentmodelobj : studentdata = new studentdata;

  formValue !:FormGroup;

  allstudentdata :any;


  edit(){
    this.studentmodelobj.id=this.student.id;
    this.formValue.controls['name'].setValue(this.student.name);
    this.formValue.controls['lastname'].setValue(this.student.lastname);
    this.formValue.controls['class'].setValue(this.student.class);

  }

    //update on edit
    update(){
      this.studentmodelobj.name = this.formValue.value.name;
      this.studentmodelobj.lastname = this.formValue.value.lastname;
      this.studentmodelobj.class = this.formValue.value.class;

      this.api.updatestudent(this.studentmodelobj,this.studentmodelobj.id).subscribe(res=>{
        this.formValue.reset();
        alert("Record updated sucessfully");
      },
      err=>{
        alert("something went wrong!!!");
      })
    }

}


