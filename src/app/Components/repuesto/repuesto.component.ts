import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-repuesto',
  templateUrl: './repuesto.component.html',
  styleUrls: ['./repuesto.component.css']
})
export class RepuestoComponent implements OnInit{
  constructor(public api:ApiService){ }
  ngOnInit(): void {
    var response = this.api.getAll("Repuestoes")
    console.log(response);
  }
		
}
