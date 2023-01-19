import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  ok = ""
  logeado = localStorage.getItem('logeado')
  logout() {
    // localStorage.removeItem('logeado')
    // localStorage.removeItem('user')
    // localStorage.removeItem('pass')
    Swal.fire({
      text: "Desea cerrar sesion!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, logout'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'cerrado sesion exitisamente'
        )
        localStorage.removeItem('logeado')
        localStorage.removeItem('user')
        localStorage.removeItem('pass')

        localStorage.removeItem('username')
        localStorage.removeItem('email')
        localStorage.removeItem('password')
        localStorage.removeItem('repeatPassword')
        localStorage.removeItem('firstName')
        localStorage.removeItem('lastName')
        localStorage.removeItem('phone')
        localStorage.removeItem('company')
        localStorage.removeItem('saved')

        this.router.navigate(['login'])
      }
    })
  }
}
