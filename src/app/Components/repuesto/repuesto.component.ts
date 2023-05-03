import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-repuesto',
  templateUrl: './repuesto.component.html',
  styleUrls: ['./repuesto.component.css']
})
export class RepuestoComponent implements OnInit{
  title: string= "Repuestos";
  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;
  


  constructor(public api:ApiService){
    this.dataSource= new MatTableDataSource
  }

  ngOnInit(): void {
    this.getRepuestos();
  }


  public async getRepuestos(){
    await this.api.getAll("Repuestoes").then((res)=> {
    this.loadTable([res[0]])
    this.dataSource.data=res;
    })
  }
  
  public loadTable(data:any[]){
    this.displayedColumns=[];
    for(let colummns in data[0]){
      this.displayedColumns.push(colummns);
    }
  }

}
