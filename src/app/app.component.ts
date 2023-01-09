import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'registration-app';
  @ViewChild('f') form:NgForm;
  users=[]
  defaultGender='male'
  onSubmit(){
    console.log(this.form.value)
    this.users.push(this.form.value)
    this.form.reset()
  }
}
