import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImagenService } from 'src/app/service/imagen.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent {}/*implements OnInit {
  nombre: string = '';
  link: string = '';
  descripcion: string = '';
  img: string = '';
  proyecto: Proyecto=null;
  constructor(private proyectoService: ProyectoService, private router: Router, private activatedRouter: ActivatedRoute,
    public imagenService:ImagenService) { }

  ngOnInit(): void {

  }

  OnCreate(): void {
    const proy = new Proyecto(this.nombre, this.link, this.descripcion, this.img);
    this.proyectoService.save(proy).subscribe(
      data => {
          alert("Proyecto Añadidado");
          this.router.navigate(['']);
    }, err => {
          alert("falló");
          this.router.navigate(['']);
    }
    )
}/*
onUpdate(): void {
  const id = this.activatedRouter.snapshot.params['id'];
  this.proyecto.img=this.imagenService.url;
  this.proyectoService.update(id, this.proyecto).subscribe(
    data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar proyecto");
      this.router.navigate(['']);
    }
  )
}
uploudImagen2($event:any){
  const id=this.proyecto.id;
 const name="proyecto_"+ id;
  this.imagenService.uploudImagen2($event, name);
  
}
}
*/





