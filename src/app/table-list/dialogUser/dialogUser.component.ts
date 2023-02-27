import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { UsersService } from 'app/services/users.service';
import { newUserService } from 'app/services/new_users.service';
import { createUserComponent } from 'app/pages/create_user/create_user.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'app/interfaces/newuser';



@Component({
  selector: 'app-dialogUser',
  templateUrl: './dialogUser.component.html',
  styleUrls: ['./dialogUser.component.scss']
})
export class DialogUserComponent implements OnInit {

  usuario: any
  username: string = 'uwu';
  nombre: string = '';
  apellidoPaterno: string = '';
  apellidoMaterno: string = '';
  celular: string = '';
  idrol: number;
  email: string = '';
  fechaNacimiento = '';
  password = '';
  estado: boolean = false;
  UserForm: FormGroup=null;
  signninIn2: boolean = false;
  body2: User = {
    idusuario: '',
    username: 'uwu',
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    celular: 0,
    idrol: 0,
    fechaNacimiento: '',
    email: '',
    password: '',
    estado: false
  };
  submitted = false;
  render=false;
  title='CREAR USUARIO'

  constructor(public dialogRef: MatDialogRef<DialogUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {id?: string}, private UserEdit: UsersService,
    private formBuilder: FormBuilder,
    private createUserService: newUserService,
    private router: Router,
    private toastr: ToastrService
    ) { 

     
      
    }

    getUser() {
     this.UserEdit.getUser(this.data.id).then((data)=>{
        this.usuario=data.usuario;
        this.UserForm = this.formBuilder.group({
          idusuario: [data.usuario.idusuario, [Validators.required]],
          nombre: [data.usuario.nombre, [Validators.required]],
          apellidoPaterno: [data.usuario.apellidoPaterno, [Validators.required]],
          apellidoMaterno: [data.usuario.apellidoMaterno, [Validators.required]],
          //password: [data.usuario.password, [Validators.required]],
          idrol: [data.usuario.idrol, [Validators.required]],
          email: [data.usuario.email, [Validators.required, Validators.email]],
          fechaNacimiento: [data.usuario.fechaNacimiento, [Validators.required]],
          celular: [data.usuario.celular, [Validators.required]],
        });
        this.render=true

      })

    }
     ngOnInit() {
      if(this.data!=null && this.data.id){
        this.title='EDITAR USUARIO'
        this.getUser()
      }else{
        this.UserForm = this.formBuilder.group({
          nombre: [, [Validators.required]],
          apellidoPaterno: [, [Validators.required]],
          apellidoMaterno: [, [Validators.required]],
            password: [, [Validators.required]],
          idrol: [, [Validators.required]],
          email: [, [Validators.required, Validators.email]],
          fechaNacimiento: [, [Validators.required]],
          celular: [, [Validators.required]],



      })
      this.render=true

    }
  }
/*     get Nombre(){
      return this.UserForm.get('nombre');
    }
    get ApellidoPaterno(){
      return this.UserForm.get('apellidoPaterno');
    }
    get ApellidoMaterno(){
      return this.UserForm.get('apellidoMaterno');
    }
    get Password(){
      return this.UserForm.get('password');
    }
    get IdRol(){
      return this.UserForm.get('idrol');
    }
    get Email(){
      return this.UserForm.get('email');
    }
    get FechaNacimiento(){
      return this.UserForm.get('fechaNacimiento');
    }

    get Celular(){
      return this.UserForm.get('celular');
    }

    get Estado(){
      return this.UserForm.get('estado');
    }
 */
    onSubmit() {
      console.log('submited');
      this.submitted = true;
      if (this.UserForm.invalid) {
        console.log('invalid');
        this.toastr.error('Campos invalidos', "", {"positionClass": "toast-top-right", "timeOut": 5000 });

        return;
      } else {
        if(this.data && this.data.id){



        }
/*         this.signninIn2 = true;
        this.body2.nombre = this.Nombre!.value;
        this.body2.apellidoPaterno = this.ApellidoPaterno!.value;
        this.body2.apellidoMaterno = this.ApellidoMaterno!.value;
        this.body2.password = this.Password!.value;
        this.body2.idrol = parseInt(this.IdRol!.value);
        this.body2.email = this.Email!.value;
        this.body2.fechaNacimiento = this.FechaNacimiento!.value;
        this.body2.celular = parseInt(this.Celular!.value);
        this.body2.estado = false; */
        console.log(this.body2);
        this.createUserService.postNewUser(this.body2).subscribe((res: any)=>{console.log(res) ;this.toastr.success(res.msg)},
        (error:any)=>{console.log('hola error 2',error.error.errors); error.error.errors.forEach((element: any) =>{
          this.toastr.error(element.msg, '', {timeOut:15000})
        });})
      }
    }

    onNoClick(): void {
      this.dialogRef.close();
    }



}


