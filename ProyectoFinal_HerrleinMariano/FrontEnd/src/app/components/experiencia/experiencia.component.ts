import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  exp: Experiencia[] = []

  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }

  isLogger = false;

  ngOnInit(): void {

    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogger = true;
    } else {
      this.isLogger = false;
    }
  }



  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(data => { this.exp = data; })
  }


  Borrar(id?: number) {

    if (id != undefined) {
      this.sExperiencia.delete(id).subscribe(
        {
          next: data => {
            this.cargarExperiencia;
          },
          error: err => {
            alert("No se pudo borrar la experiencia");
          }
        }
      )
    }
  }
}

