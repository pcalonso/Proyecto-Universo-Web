import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent {

  miFormulario: FormGroup = this.fb.group({
    name:     ['Alberto Durero', [ Validators.required ]],
    email:    ['durero@museodelprado.com', [ Validators.required, Validators.email ]],
    password: ['222888', [ Validators.required, Validators.minLength(6) ]],
  });

  constructor( private fb: FormBuilder,
               private router: Router,
               private authService: AuthService ) { }


  registro() {
    const { name, email, password } = this.miFormulario.value;

    this.authService.registro( name, email, password )
      .subscribe( ok => {

        if ( ok === true ) {
          this.router.navigateByUrl('./account/micuenta');
        } else {
          Swal.fire('Error', ok, 'error');
        }
      });

  }



}