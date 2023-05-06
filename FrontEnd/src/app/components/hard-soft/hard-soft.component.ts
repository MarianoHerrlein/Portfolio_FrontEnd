import { Component, OnInit } from '@angular/core';
import { Hys } from 'src/app/model/hys';
import { HysService } from 'src/app/service/hys.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hard-soft',
  templateUrl: './hard-soft.component.html',
  styleUrls: ['./hard-soft.component.css']
})
export class HardSoftComponent implements OnInit {
  hys: Hys[] = [];

  constructor(private sHys: HysService, private tokenService: TokenService) { }

  isLogger = false;

  ngOnInit(): void {

    this.cargarHys();
    if (this.tokenService.getToken()) {
      this.isLogger = true;
    } else {
      this.isLogger = false;
    }

  }

  
  


  cargarHys(): void {
    this.sHys.lista().subscribe(data => { this.hys = data; })
  }


  Borrar(id?: number) {

    if (id != undefined) {
      this.sHys.delete(id).subscribe(
        {
          next: data => {
            this.cargarHys();
          },
          error: err => {
            alert("No se pudo borrar la skill");
          }
        }
      )
    }
  }
 
    
  }



