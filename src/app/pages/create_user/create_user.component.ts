import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'app/interfaces/newuser';
import { newUserService } from 'app/services/new_users.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-create_user',
  templateUrl: './create_user.component.html',
  styleUrls: ['./create_user.component.scss']
})
export class createUserComponent implements OnInit {

  nombre: string = '';
  apellidoPaterno: string = '';
  apellidoMaterno: string = '';
  password: string = '';
  idrol: string = '';
  email: string = '';
  fechaNacimiento = '';
  celular = '';
  newUserForm!: FormGroup;
  signninIn2: boolean = false;
  body2: User = {
    username: '',
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    password: '',
    idrol: 0,
    email: '',
    fechaNacimiento: '',
    celular: 0

  };
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private createUserService: newUserService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
      this.newUserForm = this.formBuilder.group({
      nombre: [, [Validators.required]],
      apellidoPaterno: [, [Validators.required]],
      apellidoMaterno: [, [Validators.required]],
      password: [, [Validators.required]],
      idrol: [, [Validators.required]],
      email: [, [Validators.required, Validators.email]],
      fechaNacimiento: [, [Validators.required]],
      celular: [, [Validators.required]],
    });
  }

  get f(){
    return this.newUserForm.controls;
  }

  get Nombre(){
    return this.newUserForm.get('nombre');
  }
  get ApellidoPaterno(){
    return this.newUserForm.get('apellidoPaterno');
  }
  get ApellidoMaterno(){
    return this.newUserForm.get('apellidoMaterno');
  }
  get Password(){
    return this.newUserForm.get('password');
  }
  get IdRol(){
    return this.newUserForm.get('idrol');
  }
  get Email(){
    return this.newUserForm.get('email');
  }
  get FechaNacimiento(){
    return this.newUserForm.get('fechaNacimiento');
  }

  get Celular(){
    return this.newUserForm.get('celular');
  }

  onSubmit() {
    console.log('submited');
    this.submitted = true;
    if (this.newUserForm.invalid) {
      console.log('invalid');
      this.toastr.error('Campos invalidos', "", {"positionClass": "toast-top-right", "timeOut": 5000 });

      return;
    } else {
      this.signninIn2 = true;
      this.body2.nombre = this.Nombre!.value;
      this.body2.apellidoPaterno = this.ApellidoPaterno!.value;
      this.body2.apellidoMaterno = this.ApellidoMaterno!.value;
      this.body2.password = this.Password!.value;
      this.body2.idrol = parseInt(this.IdRol!.value);
      this.body2.email = this.Email!.value;
      this.body2.fechaNacimiento = this.FechaNacimiento!.value;
      this.body2.celular = parseInt(this.Celular!.value);
      console.log(this.body2);
      // this.createUserService.postNewUser(this.body2).subscribe((res: any)=>{console.log(res) ;this.toastr.success(res.msg)},
      // (error:any)=>{console.log('hola error',error.error.errors); error.error.errors.forEach((element: any) =>{
      //   this.toastr.error(element.msg, '', {timeOut:15000})
      // });})
    }
  }

}
