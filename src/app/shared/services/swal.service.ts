import {Injectable} from '@angular/core';
import Swal, {SweetAlertIcon, SweetAlertPosition} from 'sweetalert2';
import {Icon} from '../enum/icon.enum';

@Injectable({
  providedIn: 'root'
})
export class SwalService {

  constructor() {
  }

  alert(title, text, icon = Icon.SUCCESS): void {
    Swal.fire(title, text, icon as SweetAlertIcon);
  }

  toast(title: string, icon = Icon.SUCCESS, position = 'top-start', timer = 3000): void {
    Swal.mixin({
      toast: true,
      position: position as SweetAlertPosition,
      showConfirmButton: false,
      timer,
      timerProgressBar: true,
      onOpen: toast => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    }).fire({
      icon: icon as SweetAlertIcon,
      title
    });
  }

}
