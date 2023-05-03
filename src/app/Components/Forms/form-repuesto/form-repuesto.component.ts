import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-repuesto',
  templateUrl: './form-repuesto.component.html',
  styleUrls: ['./form-repuesto.component.css']
})

export class FormRepuestoComponent {
  
  repuestosForm= new FormGroup({
    vehiculo: new FormControl('',Validators.required),
    valor: new FormControl('',Validators.required),
    tipo: new FormControl('',Validators.required),
  });

  async onSubmit(){
    console.log(this.repuestosForm.controls["vehiculo"].value);
    console.log(this.repuestosForm.controls["valor"].value);
    console.log(this.repuestosForm.controls["tipo"].value);
  }

}


