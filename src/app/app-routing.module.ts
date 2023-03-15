import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepuestoComponent } from './Components/repuesto/repuesto.component';
import { VehiculoComponent } from './Components/vehiculo/vehiculo.component';

const routes: Routes = [
  {path:"Repuesto", component:RepuestoComponent},
  {path:"Vehiculo", component:VehiculoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
