import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/Persona';
import { ApiPersonasService } from 'src/app/service/api-personas.service';
//7.3) importar objeto "Personas" que se encuenta en el archivo "dataPersonas.ts"
//import { Personas } from 'src/app/model/dataPersonas';

@Component({
  selector: 'app-persona-component',
  templateUrl: './persona-component.component.html',
  styleUrls: ['./persona-component.component.css']
})
export class PersonaComponentComponent implements OnInit {

  title: string= "Lista de personas"
  //7.4) Guardar los datos de "Persona" en la variable "listPersonas"
  listPersonas: Persona[] = [];

  constructor(private personaService: ApiPersonasService) {

  }

  ngOnInit(): void {
    this.allPersona();
  }

  allPersona():void {
    this.personaService.getAllPersona().subscribe(respuesta => {
      console.log(respuesta);

      this.listPersonas = respuesta.data;
      console.log('>>>>>>>>>>', this.listPersonas)

      this.listPersonas.forEach(x => {
        console.log('>>>>>>>>>>', x)
      })
    });
  }

}
