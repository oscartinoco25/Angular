import { Component, OnInit } from '@angular/core';
import { Venta } from 'src/app/model/Venta';
import { ApiVentasService } from 'src/app/service/api-ventas.service';

@Component({
  selector: 'app-venta-component',
  templateUrl: './venta-component.component.html',
  styleUrls: ['./venta-component.component.css']
})
export class VentaComponentComponent implements OnInit{
  
  title: string= "Lista de Ventas"
  //7.4) Guardar los datos de "Ventas" en la variable "listVentas"
  listVentas: Venta[] = [];

  constructor(private ventaService: ApiVentasService) {

  }

  ngOnInit(): void {
    this.allVenta();
  }

  allVenta():void {
    this.ventaService.getAllVenta().subscribe(respuesta => {
      console.log('>>>>>>>>>>', this.listVentas)

      this.listVentas.forEach(x => {
        console.log('>>>>>>>>>>', x)
      })
    })
  }

}
