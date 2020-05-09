import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  submitted = false;
  formContact: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService

  ) { 
    this.formContact = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      email: ['',Validators.compose([Validators.required, Validators.pattern
        ('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')])],
      message: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
  }

  // mainForm(){
  //   this.formContact = this.formBuilder.group({
  //     name: ['', Validators.compose([Validators.required])],
  //     email: ['',[Validators.required, Validators.pattern
  //       ('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')]],
  //     message: ['', Validators.compose([Validators.required])]
  //   });
  // }

  // Getter ti access form control
  // get myForm(){
  //   return this.formContact.controls;
  // }

  // add comment to database onSubmit()
  onSubmit(values){
    console.log(values);
      this.apiService.sendMessage(values).subscribe((result)=>{
        console.log(result);
        //this.router.navigate([''])
    });
  }  

}
  

