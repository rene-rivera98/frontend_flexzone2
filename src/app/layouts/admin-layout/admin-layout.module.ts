import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/facturacion/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../pages/almacen/typography.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/cafeteria/notifications.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { AgGridModule } from 'ag-grid-angular';
import { createUserComponent } from 'app/pages/create_user/create_user.component';
import { MatCommonModule, MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MaterialExampleModule } from 'app/layouts/admin-layout/material.module';
import { MatButtonModule } from '@angular/material/button';
import { OptionsComponent } from 'app/table-list/options/options.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogUserComponent } from 'app/table-list/dialogUser/dialogUser.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { ComprasComponent } from 'app/pages/compras/compras.component';
import { ProductosComponent } from 'app/pages/productos/productos.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule.forRoot({positionClass: 'toast-top-right',
    timeOut: 20000,}),
    AgGridModule,
    ReactiveFormsModule,
    MatCommonModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    MaterialExampleModule
   ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    MapsComponent,
    NotificationsComponent,
    createUserComponent,
    OptionsComponent,
    DialogUserComponent,
    ComprasComponent,
    ProductosComponent
  ]
})

export class AdminLayoutModule {}
