import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proy: Proyecto[] = []

  constructor(private proyectoService: ProyectoService , private tokenService: TokenService) { }

  isLogger = false;

  ngOnInit(): void {

    this.cargarProyecto();
    if (this.tokenService.getToken()) {
      this.isLogger = true;
    } else {
      this.isLogger = false;
    }
  }



  cargarProyecto(): void {
    this.proyectoService.lista().subscribe(data => { this.proy = data; })
  }


  Borrar(id?: number) {

    if (id != undefined) {
      this.proyectoService.delete(id).subscribe(
        {
          next: data => {
            this.cargarProyecto();
          },
          error: err => {
            alert("No se pudo borrar el proyecto");
          }
        }
      )
    }
  }


  enviar(link:string){
    
  }
}
