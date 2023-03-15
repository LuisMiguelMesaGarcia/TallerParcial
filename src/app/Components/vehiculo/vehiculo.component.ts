import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit{
  constructor(public api:ApiService){ }
  ngOnInit(): void {
    var response = this.api.getAll("Vehiculoes")
    console.log(response);
  }
}
