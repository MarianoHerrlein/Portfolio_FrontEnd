import { Injectable } from '@angular/core';
import { Storage,ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';
@Injectable({
  providedIn: 'root'
})
export class ImagenService {
url:string="";
  constructor(private storage:Storage) { }
  
  public uploudImagen($event:any, name:string){
const file=$event.target.files[0] 
const imagref=ref(this.storage, 'imagen/' + name)
uploadBytes(imagref, file)
.then(response => this.getImagen())
.catch(error => console.log(error));
    
  }
getImagen(){
  const imagesRef = ref(this.storage, 'imagen/')
  list(imagesRef)
  .then(async response => {
    for(let item of response.items){
      this.url = await getDownloadURL(item);
    console.log("la url es: "+this.url)
    }
    
  })
  .catch(error => console.log(error));
}
}

