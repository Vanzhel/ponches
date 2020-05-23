import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';


@Component({
  selector: 'app-agrega',
  templateUrl: './agrega.component.html',
  styleUrls: ['./agrega.component.css']
})
export class AgregaComponent implements OnInit {
  item:any={Descripcion:'',Nombre:'',Precio:'',FechaVenc:''};
  constructor(private ser:ConexionService) { }

  ngOnInit(): void {
  }

  agregar(){
    this.ser.addItem(this.item);
  }

}
