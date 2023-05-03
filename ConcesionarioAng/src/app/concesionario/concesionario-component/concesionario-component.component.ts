import { Component, OnInit } from '@angular/core';
import { ApiConcesionariosService } from 'src/app/service/api-concesionarios.service';
import { Concesionario } from 'src/app/model/Concesionario';

@Component({
  selector: 'app-concesionario-component',
  templateUrl: './concesionario-component.component.html',
  styleUrls: ['./concesionario-component.component.css']
})
export class ConcesionarioComponentComponent implements OnInit{
  
  title: string= "Lista de concesionarios"
  //7.4) Guardar los datos de "Concesionarios" en la variable "listConcesionarios"
  listConcesionarios: Concesionario[] = [];

  constructor(private concesionarioService: ApiConcesionariosService) {

  }

  ngOnInit(): void {
    this.allConcesionario();
  }

  allConcesionario():void {
    this.concesionarioService.getAllConcesionario().subscribe(respuesta => {
      console.log(respuesta);
      
      this.listConcesionarios = respuesta.data;
      console.log('>>>>>>>>>>', this.listConcesionarios)

      this.listConcesionarios.forEach(x => {
        console.log('>>>>>>>>>>', x)
      })
    });
  }

}
