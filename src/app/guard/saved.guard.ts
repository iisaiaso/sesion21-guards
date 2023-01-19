import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SavedGuard implements CanDeactivate<unknown> {
  canDeactivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('saved')) {
      return true
    } else {
      Swal.fire({
        icon: 'info',
        title:'Estas seguro que desesas salir',
        text: 'Debes de rellenar todos los campos y gurdar',
        showConfirmButton: false,
        timer: 1500
      })
      return false;
    }
  }

}
