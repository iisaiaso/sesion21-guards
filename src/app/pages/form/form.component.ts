import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {


  name!: string
  lastNamePat!: string
  lastNameMot!: string
  username!: string
  email!: string
  password!: string
  repeatPassword!: string
  region!: string
  pais!: string
  codPostal!: string

  newName!: string | null
  newLastNamePat!: string | null
  newLastNameMot!: string | null
  newUsername!: string | null
  newEmail!: string | null
  newPassword!: string | null
  newRepeatPassword!: string | null
  newRegion!: string | null
  newPais!: string | null
  newCodPostal!: string | null

  cadena!: string

  saveUser() {
    if (this.name != null && this.lastNamePat != null && this.lastNamePat != null &&
      this.username != null && this.email != null && this.password != null &&
      this.repeatPassword != null && this.region != null && this.pais != null && this.codPostal != null) {

      localStorage.setItem('name', this.name)
      localStorage.setItem('lastNamePat', this.lastNamePat)
      localStorage.setItem('lastNameMot', this.lastNameMot)
      localStorage.setItem('username', this.username)
      localStorage.setItem('email', this.email)
      localStorage.setItem('password', this.password)
      localStorage.setItem('repeatPassword', this.repeatPassword)
      localStorage.setItem('region', this.region)
      localStorage.setItem('pais', this.pais)
      localStorage.setItem('codPostal', this.codPostal)

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

      this.newName = localStorage.getItem('name')
      this.newLastNamePat = localStorage.getItem('lastNamePat')
      this.newLastNameMot = localStorage.getItem('lastNameMot')
      this.newUsername = localStorage.getItem('username')
      this.newEmail = localStorage.getItem('email')
      this.newPassword = localStorage.getItem('password')
      this.newRepeatPassword = localStorage.getItem('repeatPassword')
      this.newRegion = localStorage.getItem('region')
      this.newPais = localStorage.getItem('pais')
      this.newCodPostal = localStorage.getItem('codPostal')

      this.cadena = `{ ${this.newName}, ${this.newLastNamePat}, ${this.newLastNameMot}, ${this.newUsername}, 
                       ${this.newEmail}, ${this.newPassword}, ${this.newRepeatPassword}, ${this.newRegion},
                       ${this.newPais}, ${this.newCodPostal}}`

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
