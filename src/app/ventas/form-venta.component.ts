import { Component, OnInit } from '@angular/core';
import { Venta } from './venta';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { VentaService } from './venta.service';

@Component({
  selector: 'app-form-venta',
  templateUrl: './form-venta.component.html',
  styleUrls: ['./form-venta.component.css']
})
export class FormVentaComponent implements OnInit {
  venta:Venta = new Venta();
  titulo:string="Registro de Venta";

  constructor(private ventaService:VentaService, private router:Router, private activateRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.cargar();
  }

  cargar():void{
    this.activateRoute.params.subscribe(
      e=>{
        let id=e['id'];
        if(id){
          this.ventaService.get(id).subscribe(
            es=>this.venta=es
          );
        }
      }
    );
  }

  create():void{
    console.log(this.venta);
    this.ventaService.create(this.venta).subscribe(
      res=>this.router.navigate(['/ventas'])
    );
  }

update():void{
  this.ventaService.update(this.venta).subscribe(
    res=>this.router.navigate(['/ventas'])
  );
}

}
