import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'REPORTES',  icon: 'business_chart-bar-32', class: '' },
    { path: '/usuarios', title: 'USUARIOS',  icon:'users_single-02', class: '' },
    { path: '/frontdesk', title: 'FRONTDESK',  icon:'files_box', class: '' },
    { path: '/cafeteria', title: 'CAFETERIA',  icon:'shopping_shop', class: '' },
    { path: '/compras', title: 'COMPRAS*', icon: 'shopping_cart-simple', class: ''},
    // { path: '/facturacion', title: 'FACTURACIÓN',  icon:'files_single-copy-04', class: '' },
    { path: '/caja', title: 'CAJA',  icon:'business_money-coins', class: '' },
    // { path: '/almacen', title: 'ALMACEN',  icon:'shopping_box', class: '' },
    { path: '/logout', title: 'CERRAR SESIÓN',  icon:'ui-1_simple-remove', class: 'active active-pro', }

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };


}
