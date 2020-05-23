import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  items:any;
  itemEditar={Descripcion:'',Nombre:'',Precio:'',FechaVenc:''};

  constructor(private conexion:ConexionService) {
    this.conexion.retornaItems().subscribe(items=>{
      this.items=items;
      console.log(this.items);
    })
   }

  ngOnInit(): void {
  }

  eliminar(id){
    if (confirm("¿Esta seguro de eliminar este producto?"+" "+this.itemEditar.Nombre)){
    console.log(id);
    this.conexion.eliminar(id);
    }
  }

  editar(item){

    console.log(item);
    this.itemEditar = item; 
  }

  editarForm(){
    if (confirm("¿Esta seguro de guardar cambios del producto?"+" "+this.itemEditar.Nombre)){  
    this.conexion.editar(this.itemEditar);  
    }
    
  }

}
