import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {


  username!: string
  email!: string
  password!: string
  repeatPassword!: string
  firstName!: string
  lastName!: string
  phone!: string
  company!: string
  
  newusername!: string | null 
  newemail!: string | null
  newpassword!: string | null
  newrepeatPassword!: string | null
  newfirstName!: string | null
  newlastName!: string | null
  newphone!: string | null
  newcompany!: string | null

  saveUser() {
    if (this.username != null && this.email != null && this.password != null && this.repeatPassword != null
      && this.firstName != null && this.lastName != null && this.phone != null && this.company != null) {

      localStorage.setItem('username', this.username)
      localStorage.setItem('email', this.email)
      localStorage.setItem('password', this.password)
      localStorage.setItem('repeatPassword', this.repeatPassword)
      localStorage.setItem('firstName', this.firstName)
      localStorage.setItem('lastName', this.lastName)
      localStorage.setItem('phone', this.phone)
      localStorage.setItem('company', this.company)

      localStorage.setItem('saved', 'true')

      Swal.fire({
        icon: 'success',
        title: 'Datos guardados correctamente',
        showConfirmButton: false,
        timer: 1500,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }

      })

      this.newusername = localStorage.getItem('username')
      this.newemail = localStorage.getItem('email')
      this.newpassword = localStorage.getItem('password')
      this.newrepeatPassword = localStorage.getItem('repeatPassword')
      this.newfirstName = localStorage.getItem('firstName')
      this.newlastName= localStorage.getItem('lastName')
      this.newphone = localStorage.getItem('phone')
      this.newcompany = localStorage.getItem('company')

    } else {
      Swal.fire({
        icon: 'error',
        title: 'Los campos no deben estar vacios',
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
