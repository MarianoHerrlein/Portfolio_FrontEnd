import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hys } from 'src/app/model/hys';
import { HysService } from 'src/app/service/hys.service';

@Component({
  selector: 'app-new-hys',
  templateUrl: './new-hys.component.html',
  styleUrls: ['./new-hys.component.css']
})
export class NewHysComponent implements OnInit {
  nombre: string ;
  porcentaje: number;

  constructor(private sHys: HysService, private router: Router) { }

  ngOnInit(): void {

  }

  onCreate(): void {
    const hys = new Hys(this.nombre, this.porcentaje);
    this.sHys.save(hys).subscribe(
      data => {
          alert("skill Añadidad");
          this.router.navigate(['']);
    }, err => {
          alert("falló");
          this.router.navigate(['']);
    }
    )
}
} 
