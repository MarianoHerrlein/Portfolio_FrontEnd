import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/service/s-educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  edu: Educacion[] = []

  constructor(private sEducacions: SEducacionService, private tokenService: TokenService) { }

  isLogger = false;

  ngOnInit(): void {

    this.cargarEducacion();
    if (this.tokenService.getToken()) {
      this.isLogger = true;
    } else {
      this.isLogger = false;
    }
  }



  cargarEducacion(): void {
    this.sEducacions.lista().subscribe(data => { this.edu = data; })
  }


  Borrar(id?: number) {

    if (id != undefined) {
      this.sEducacions.delete(id).subscribe(
        {
          next: data => {
            this.cargarEducacion;
          },
          error: err => {
            alert("No se pudo borrar la educacion");
          }
        }
      )
    }
  }
}


