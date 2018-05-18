import { Component } from '@angular/core';
import {BackEndServiceService} from './back-end-service.service';
import { Details } from './details.model';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  details:Details[];
  signUpForm: FormGroup;
  constructor(private service: BackEndServiceService){
    this.details=service.getDetails();
    this.signUpForm=new FormGroup({
      'name': new FormControl(''),  'age': new FormControl(null),
      'about': new FormControl('')
      });
  }


  onSubmit(){
    this.details.push({'name': this.signUpForm.get('name').value,'age':+this.signUpForm.get('age').value,'about':this.signUpForm.get('about').value})
    this.signUpForm.reset();
  }
}
