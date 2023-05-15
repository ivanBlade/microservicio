import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {Routes, RouterModule} from '@angular/router';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FormClienteComponent } from './clientes/form-cliente.component';
import { VentasComponent } from './ventas/ventas.component';
import { FormVentaComponent } from './ventas/form-venta.component';

const routes:Routes=[
  { path:'', redirectTo:'/clientes', pathMatch:'full'},
  { path:'clientes', component:ClientesComponent },
  { path:'', redirectTo:'/ventas', pathMatch:'full'},
  { path:'ventas', component:VentasComponent },

  { path:'clientes/form', component:FormClienteComponent },
  { path:'clientes/form/:id', component:FormClienteComponent },
  { path:'ventas/form', component:FormVentaComponent },
  { path:'ventas/form/:id', component:FormVentaComponent },

]

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    FormClienteComponent,
    VentasComponent,
    FormVentaComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
