import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userStore = [
    {userName: 'venkat', password: '123'},
    {userName: 'ram', password: '123'},
    {userName: 'srijan', password: '123'}
  ];

  constructor(private http: HttpClient) { }

  login(userName: string, password: string){
    for(let i = 0; i < this.userStore.length; i++){
      if(this.userStore[i].userName === userName && this.userStore[i].password === password){
        return this.http.post('http://demo3382045.mockable.io/login',{password,userName});  
      }
    }
    return this.http.post('http://demo3382045.mockable.io/loginError',{password,userName});
  }
}
