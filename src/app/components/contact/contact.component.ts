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
    this.mainForm();
  }

  ngOnInit() {
  }

  mainForm(){
    this.formContact = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['',[Validators.required, Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')]],
      message: ['', [Validators.required]]
    });
  }

  // Getter ti access form control
  get myForm(){
    return this.formContact.controls;
  }

  // add comment to database onSubmit()
  onSubmit(){
    this.submitted = true;
    if(!this.formContact.valid){
      
      console.log("some field in message is not valid!");
      alert('please fill all required fields');
      
    } else {
      this.apiService.sendMessage(this.formContact.value).subscribe(
        (res) => {
          this.submitted = true;
          console.log('message sent successfully!')
          alert('Thanks you!');
          this.router.navigateByUrl('/')
        }
      )
    }
  }
}
