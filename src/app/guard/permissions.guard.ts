import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivate {
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.login()) {
      return true
    } else {
      Swal.fire({
        icon:'info',
        text: 'Deves estar logeado para ir a la pagina!',
        showConfirmButton: false,
        timer: 1500
      })
      return false
    }
  }

login(){
 return localStorage.getItem('logeado')
}
}
