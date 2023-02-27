import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import {MatDialog} from '@angular/material/dialog';
import { DialogUserComponent } from '../dialogUser/dialogUser.component';
import { UsersService } from 'app/services/users.service';
@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements ICellRendererAngularComp {
  //
  idusuario: string;
  nombre: string;
  cellValue!: string;
  //
  constructor(public dialog: MatDialog, private deleteUser: UsersService) { }

  // DIALOG
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogUserComponent, {
      data: {id: this.cellValue},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('xd');
      this.nombre = result;
    });
  }
  //
  agInit(params: ICellRendererParams<any, any>): void {
    this.cellValue = this.getValueToDisplay(params);
  }
  //
  refresh(params: ICellRendererParams<any, any>): boolean {
    this.cellValue = this.getValueToDisplay(params);
    return true;
  }
  //
    userDeleted() {
      // alert(`${this.cellValue} owo!`);
      this.deleteUser.deleteUser(this.cellValue)
    }

    //
  getValueToDisplay(params: ICellRendererParams) {
    return params.valueFormatted ? params.valueFormatted : params.value;
  }

}


