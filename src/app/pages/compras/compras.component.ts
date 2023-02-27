import { ComprasService } from './../../services/compras.service';
import { Compras } from './../../interfaces/compras';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  id_compra: string = '';
  id_usuario: string = '';
  total_compra: string = '';
  subtotal_compra: string = '';
  total_productos: string = '';
  CFDI: string = '';
  createdAt: string = '';
  updatedAt: string = '';
  newCompraForm!: FormGroup;
  signninIn3: boolean = false;
  compras: Compras = {
    id_compra: '',
    id_usuario: '',
    total_compra: 0,
    subtotal_compra: 0,
    total_productos: 0,
    CFDI: '',
    createdAt: '',
    updatedAt: ''
  };
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private createRegisterCompra: ComprasService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.newCompraForm = this.formBuilder.group({
      id_compra: [, [Validators.required]],
      id_usuario: [, [Validators.required]],
      total_compra: [, [Validators.required]],
      subtotal_compra: [, [Validators.required]],
      total_productos: [, [Validators.required]],
      CFDI: [, [Validators.required]],
      createdAt: [, [Validators.required]],
      updatedAt: [, [Validators.required]],
    });
  }

  get f(){
    return this.newCompraForm.controls;
  }

  get Id_compra(){
    return this.newCompraForm.get('id_compra');
  }
  get Id_usuario(){
    return this.newCompraForm.get('id_usuario');
  }
  get Total_compra(){
    return this.newCompraForm.get('total_compra');
  }
  get Subtotal_compra(){
    return this.newCompraForm.get('subtotal_compra');
  }
  get Total_productos(){
    return this.newCompraForm.get('total_productos');
  }
  get cdf1(){
    return this.newCompraForm.get('CFDI');
  }
  get CreatedAt(){
    return this.newCompraForm.get('createdAt');
  }

  get UpdatedAt(){
    return this.newCompraForm.get('updatedAt');
  }

  onSubmit() {
    console.log('submited');
    this.submitted = true;
    if (this.newCompraForm.invalid) {
      console.log('invalid');
      this.toastr.error('Campos invalidos', "", {"positionClass": "toast-top-right", "timeOut": 5000 });

      return;
    } else {
      this.signninIn3 = true;
      this.compras.id_compra = this.Id_compra!.value;
      this.compras.id_usuario = this.Id_usuario!.value;
      this.compras.total_compra = this.Total_compra!.value;
      this.compras.subtotal_compra = this.Subtotal_compra!.value;
      this.compras.total_productos = this.Total_productos!.value;
      this.compras.CFDI = this.cdf1!.value;
      this.compras.createdAt = this.CreatedAt!.value;
      this.compras.updatedAt = this.UpdatedAt!.value;
      console.log(this.compras);
      this.createRegisterCompra.postCompras(this.compras).subscribe((res: any)=>{console.log(res) ;this.toastr.success(res.msg)},
      (error:any)=>{console.log('hola error COMPRAS',error.error.errors); error.error.errors.forEach((element: any) =>{
        this.toastr.error(element.msg, '', {timeOut:15000})
      });})
    }
  }
}
