import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importacion de la ruta
import { RouterModule, Routes } from '@angular/router';
// Importacion de los componentes a navegar
import { FormPersonaComponent } from './persona/form-persona/form-persona.component';
import { FormConcesionarioComponent } from './concesionario/form-concesionario/form-concesionario.component';
import { FormAutomovilComponent } from './Automovil/form-automovil/form-automovil.component';
import { FormVentaComponent } from './venta/form-venta/form-venta.component';
import { FormRolComponent } from './rol/form-rol/form-rol.component';

// Creacion del objeto con arreglos (componente)
const routes: Routes = [
  { path: 'PersonasRuta', component: FormPersonaComponent },
  { path: 'ConcesionariosRuta', component: FormConcesionarioComponent },
  { path: 'AutomovilesRuta', component: FormAutomovilComponent },
  { path: 'VentaRuta', component: FormVentaComponent },
  { path: 'RolRuta', component: FormRolComponent }
];

// Usar modulo para importar las rutas
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
