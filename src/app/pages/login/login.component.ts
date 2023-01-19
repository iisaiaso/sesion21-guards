import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginService } from 'src/app/services/user-login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user!: string
  pass!: string
  constructor(private router: Router, private loginUserSer: UserLoginService) { }
  ngOnInit(): void {

  }

  loginUser() {
    if (this.loginUserSer.loginUser(this.user, this.pass)) {
      Swal.fire({
        icon: 'success',
        title: 'Welcome',
        showConfirmButton: false,
        timer: 1500,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }

      })
      localStorage.setItem('logeado', 'true')
      localStorage.setItem('user', this.user)
      localStorage.setItem('pass', this.pass)
      this.router.navigate(['home'])
    } else {
      Swal.fire({
        icon: 'error',
        title: 'username and password incorrects',
        showConfirmButton: false,
        timer: 1500,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    }
  }
}
