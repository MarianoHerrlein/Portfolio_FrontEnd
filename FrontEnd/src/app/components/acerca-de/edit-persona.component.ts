import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { ImagenService } from 'src/app/service/imagen.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.css']
})
export class EditPersonaComponent implements OnInit{

persona: persona=null;
constructor(private personaService: PersonaService , private activatedRouter: ActivatedRoute,
  private router: Router, public imagenService:ImagenService) { }
  
  ngOnInit(): void { const id = this.activatedRouter.snapshot.params['id'];
  this.personaService.detail(id).subscribe(
    {
      next: data => {
        this.persona = data;
      },
      error: err => {
        alert("Error al modificar proyecto");
        this.router.navigate(['']);
      }}
  )
}
onUpdate(): void {
  const id = this.activatedRouter.snapshot.params['id'];
  this.persona.img=this.imagenService.url;
  this.personaService.update(id, this.persona).subscribe(
    data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar acercade");
      this.router.navigate(['']);
    }
  )
}


uploudImagen($event:any){
  const id=this.activatedRouter.snapshot.params['id'];
 const name="perfin_"+id;
  this.imagenService.uploudImagen($event, name);
}
}