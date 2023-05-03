import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepuestoComponent } from './Components/repuesto/repuesto.component';
import { VehiculoComponent } from './Components/vehiculo/vehiculo.component';
import { FormRepuestoComponent } from './Components/Forms/form-repuesto/form-repuesto.component';
import { FormVehiculoComponent } from './Components/Forms/form-vehiculo/form-vehiculo.component';

const routes: Routes = [
  {path:"Repuesto", component:RepuestoComponent},
  {path:"Vehiculo", component:VehiculoComponent},
  {path:"formRepuesto", component:FormRepuestoComponent},
  {path:"formVehiculo", component:FormVehiculoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
