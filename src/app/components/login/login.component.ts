import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    userName: [''],
    password: ['']
  });

  displayErorr=false;
  displayLoading=false;

  constructor(private formBuilder: FormBuilder, 
        private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  submit(){
    
    this.displayLoading = true;
    this.loginService.login(this.loginForm.value.userName, this.loginForm.value.password)
              .subscribe(result =>{
                this.displayLoading = false;
                console.log("logged in...");
                this.router.navigateByUrl('home');
              }, err =>{
                console.log("failed to logged in...");
                this.displayLoading = false;
                this.displayErorr = true;  
              });
  }

}
