import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-vehiculo',
  templateUrl: './form-vehiculo.component.html',
  styleUrls: ['./form-vehiculo.component.css']
})
export class FormVehiculoComponent {

  vehiculoForm= new FormGroup({
    marca: new FormControl('',Validators.required),
    color: new FormControl('',Validators.required),
    modelo: new FormControl('',Validators.required),
    placa: new FormControl('',Validators.compose([
      Validators.required, Validators.minLength(6),Validators.maxLength(6)]
    )),
  });

  async onSubmit(){
    console.log(this.vehiculoForm.controls["marca"].value);
    console.log(this.vehiculoForm.controls["color"].value);
    console.log(this.vehiculoForm.controls["modelo"].value);
    console.log(this.vehiculoForm.controls["placa"].value);
  }

}
