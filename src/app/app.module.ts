import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { MatCardModule} from '@angular/material/card';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { AuthInterceptor } from 'app/auth/auth.interceptor';

import { AgGridModule } from 'ag-grid-angular';
import { MatIconModule } from '@angular/material/icon';
import { matMenuAnimations, MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { OptionsComponent } from 'app/table-list/options/options.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot({positionClass: 'toast-top-right',
    timeOut: 20000,}),
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    AgGridModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  declarations: [

    AppComponent,
    AdminLayoutComponent,
    LoginComponent
   ],
  providers: [AuthGuardGuard,{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
