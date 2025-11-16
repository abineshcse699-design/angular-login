import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {  FormControl, FormControlDirective, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm:FormGroup= new FormGroup({

    userName:new FormControl(""),
    // EmailId: new FormControl(""),
    password: new FormControl("")


  });

  http=inject(HttpClient);
  router=inject(Router)


  onLogin(){
    const formValue= this.loginForm.value;
    this.http.post("https://api.freeprojectapi.com/api/BusBooking/login",formValue).subscribe({
       next:(responce:any)=>{

        if(responce.result){
          alert("login success abinesh")
          this.router.navigateByUrl("/dashboard")

        }else{
          alert(responce.message)
        }


      },
      error:(error)=>{
        alert(error.error)

      }
    })
  }

}
