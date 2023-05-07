import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImagenService } from 'src/app/service/imagen.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit{

  proyecto: Proyecto=null;
  constructor(private proyectoService: ProyectoService , private activatedRouter: ActivatedRoute,
    private router: Router, public imagenService:ImagenService) { }
    
    ngOnInit(): void { const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoService.detail(id).subscribe(
      {
        next: data => {
          this.proyecto = data;
        },
        error: err => {
          alert("Error al modificar proyecto");
          this.router.navigate(['']);
        }}
    )
  }
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
    const id=this.activatedRouter.snapshot.params['id'];
   const name="proyecto_"+id;
    this.imagenService.uploudImagen2($event, name);
  }
  }