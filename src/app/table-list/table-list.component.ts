import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { DialogUserComponent } from 'app/table-list/dialogUser/dialogUser.component';
import { OptionsComponent } from 'app/table-list/options/options.component';
import moment from 'moment';
import Swal from 'sweetalert2';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  private gridApi!: GridApi<any>;

// COLUMNAS
  columnDefs: ColDef[] = [
    { field: 'idusuario', headerName:'ID' ,   width: 150, hide: true},
    { headerName: 'Usuario', field: 'username', width: 260},
    { headerName: 'Nombre', field: 'nombre', width: 140},
    { headerName: 'Paterno', field: 'apellidoPaterno', width: 130},
    { headerName: 'Materno', field: 'apellidoMaterno', width: 130},
    { headerName: 'Teléfono', field: 'celular',  width: 130 },
    { headerName: 'Email', field: 'email', width: 230},
    { headerName: 'Tipo', field: 'idrol',
      valueGetter: function(params) {
      if(params.data.idrol == 300) {
          return 'Administrador';
      } if (params.data.idrol == 200){
          return 'Almacen';
      } if(params.data.idrol == 100){
        return 'Vendedor';
      }


      }, width: 140},
    { headerName: 'Nacimiento', field: 'fechaNacimiento',   width: 135 },
    { headerName: 'Alta', field: 'createdAt',
    valueFormatter: function(params) {
      const formattedDate = moment(params.value).format('YYYY-DD-MM');
      return formattedDate;
    }, width: 135},
    // { field: 'idusuario',headerName:'' ,cellRenderer:OptionsComponent,   width: 150},
    { field: 'idusuario',headerName:'' ,cellRenderer:OptionsComponent,   width: 150}
  ];

  // CLASES
  rowData :any[]
  http: any;
  public rowSelection: 'single' | 'multiple' = 'single';
  selectedRows: any[]


  // CONSTRUCTOR
  constructor(private UserService: UsersService,public dialog: MatDialog) {}

  // DECORADOR
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  // METODOS
  onSelectionChanged(event: any) {
    const selectedRows = this.gridApi.getSelectedRows();
    (document.querySelector('#selectedRows') as any).innerHTML =
      selectedRows.length === 1 ? selectedRows[0].idusuario : '';

      let miVariable = selectedRows.length === 1 ? selectedRows[0].idusuario : '';

  }

  openDialog(){
    const dialogRef = this.dialog.open(DialogUserComponent, {
      data:null
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('xd');
    });
  }
  //
  async ngOnInit() {
    const response= await this.UserService.getUserList()
     this.rowData=response.usuarios
     console.log(response)
     console.log(this.rowData[0])
   }
  //
   onGridReady(params: GridReadyEvent<any>) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit()
   }
//

};



