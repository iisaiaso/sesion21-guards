import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService implements OnInit {
  user: string = 'AD'
  password: string = '123456'
  constructor() { }
  ngOnInit(): void {
  }
  loginUser(user: string, pas: string) {
    if (this.user == user && this.password == pas) {
      return true
    } else {
      return false
    }
  }
}
