import { Component, OnInit, ViewChild  } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { OptionsComponent } from 'app/table-list/options/options.component';
import moment from 'moment';
import Swal from 'sweetalert2';
import { ProductosService } from 'app/services/productos.service';
// import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  private gridApi!: GridApi<any>;

// COLUMNAS
  columnDefs: ColDef[] = [
    { field: 'idproducto', headerName:'ID' ,   width: 150, hide: true},
    { headerName: 'Nombre', field: 'nombre', width: 260},
    { headerName: 'Código', field: 'codigo_barras', width: 140},
    { headerName: 'Precio-venta', field: 'precio_venta', width: 130},
    { headerName: 'Precio-compra', field: 'precio_compra', width: 130},
    { headerName: 'Stock', field: 'stock',  width: 130 },
    { headerName: 'Contenido', field: 'tamanio', width: 230},
    { headerName: 'Proveedor', field: 'id_proveedor',
      valueGetter: function(params) {
      if(params.data.id_proveedor == 55) {
          return 'Sabritas';
      } if (params.data.id_proveedor == 56){
          return 'Ricolino';
      } if(params.data.id_proveedor == 57){
        return 'Costco';
      }
      }, width: 140},
    { headerName: 'Fecha-registro', field: 'createdAt',   width: 135,
    valueFormatter: function(params) {
      const formattedDate = moment(params.value).format('YYYY-DD-MM');
      return formattedDate;
    }},
    { headerName: 'Fecha-actualización', field: 'updatedAt',
    valueFormatter: function(params) {
      const formattedDate = moment(params.value).format('YYYY-DD-MM');
      return formattedDate;
    }, width: 135},
    // { field: 'idusuario',headerName:'' ,cellRenderer:OptionsComponent,   width: 150},
    { field: '',headerName:'' ,cellRenderer:OptionsComponent,   width: 150}
  ];

  // CLASES
  rowData :any[]
  http: any;
  public rowSelection: 'single' | 'multiple' = 'single';
  selectedRows: any[]


  // CONSTRUCTOR
  constructor(private ProductosGetService: ProductosService) {}

  // DECORADOR
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  // METODOS
  onSelectionChanged(event: any) {
    const selectedRows = this.gridApi.getSelectedRows();
    (document.querySelector('#selectedRows') as any).innerHTML =
      selectedRows.length === 1 ? selectedRows[0].idproducto : '';

      let miVariable = selectedRows.length === 1 ? selectedRows[0].idproducto : '';

  }


  //
  async ngOnInit() {
    const response= await this.ProductosGetService.getProductsList()
     this.rowData=response.products
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
