import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/facturacion/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../pages/almacen/typography.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/cafeteria/notifications.component';
import { LoginComponent } from 'app/components/login/login.component';
import { AuthGuardGuard } from 'app/auth-guard.guard';
import { Component } from 'ag-grid-community';
import { createUserComponent } from 'app/pages/create_user/create_user.component';
import { LogoutComponent } from 'app/components/login/logout/logout.component';
import { CajaComponent } from 'app/pages/caja/caja.component';
import { ComprasComponent } from 'app/pages/compras/compras.component';
import { ProductosComponent } from 'app/pages/productos/productos.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'Login', component: LoginComponent },
    { path: 'dashboard',      component: DashboardComponent ,canActivate:[AuthGuardGuard]},
    { path: 'facturacion',   component: UserProfileComponent,canActivate:[AuthGuardGuard]},
    { path: 'usuarios',     component: TableListComponent,canActivate:[AuthGuardGuard]},
    { path: 'almacen',     component: TypographyComponent,canActivate:[AuthGuardGuard] },
    { path: 'frontdesk',           component: MapsComponent,canActivate:[AuthGuardGuard] },
    { path: 'cafeteria',  component: NotificationsComponent ,canActivate:[AuthGuardGuard]},
    { path: 'createUser', component: createUserComponent, canActivate:[AuthGuardGuard] },
    { path: 'logout', component: LogoutComponent},
    { path: 'caja', component: CajaComponent, canActivate:[AuthGuardGuard] },
    { path: 'compras', component: ComprasComponent, canActivate:[AuthGuardGuard]},
    { path: 'productos', component: ProductosComponent, canActivate:[AuthGuardGuard]}

];
