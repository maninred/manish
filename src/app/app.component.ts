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
  addButton:boolean;
  constructor(private service: BackEndServiceService){
    this.addButton=true;
    this.details=service.getDetails();
    this.signUpForm=new FormGroup({'id':new FormControl(0),
      'name': new FormControl(''),  'age': new FormControl(null),
      'about': new FormControl('')
      });
  }

  onAddButton(){
    this.addButton=true;
  }


  onRowClick(i){
    this.addButton=false;
    this.signUpForm.get('id').setValue(i);
    this.signUpForm.get('name').setValue(this.details[i].name);
    this.signUpForm.get('age').setValue(this.details[i].age);
    this.signUpForm.get('about').setValue(this.details[i].about);

  }

  onSubmit(){
    if(this.addButton){
      this.details.push({'name': this.signUpForm.get('name').value,'age':+this.signUpForm.get('age').value,'about':this.signUpForm.get('about').value})
    }else{
      let i =+this.signUpForm.get('id').value;
      this.details[i].name=this.signUpForm.get('name').value;
      this.details[i].age=this.signUpForm.get('age').value;
      this.details[i].about=this.signUpForm.get('about').value;
    }
    this.signUpForm.reset();
  }
}
