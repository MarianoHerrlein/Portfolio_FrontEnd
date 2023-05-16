import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPersonaComponent } from './components/acerca-de/edit-persona.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditHysComponent } from './components/hard-soft/edit-hys.component';
import { NewHysComponent } from './components/hard-soft/new-hys.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditProyectoComponent } from './components/proyecto/edit-proyecto.component';
import { NewProyectoComponent } from './components/proyecto/new-proyecto.component';
import { Proyecto } from './model/proyecto';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  //{ path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'sdfhgsdhgsocnvcnf-dsdg-q-3233-3', component: NewExperienciaComponent },
  { path: 'mnjhgnfsfsaftu-sgs3-ds2323r/:id', component: EditExperienciaComponent },
  { path: 'agadgadmg-dghasd-a231-agsd', component: NewEducacionComponent },
  {path:'5adsgadga_AGadg-dagsdgaimj21/:id', component:EditEducacionComponent},
  {path:'b-gadg3egs-21savsavfBs/:id',component:EditPersonaComponent},
  {path:'lghfdhfhkd21_3r3-33131-4de/:id', component:EditHysComponent},
  {path:'sdjtj-srh5-hsdhy5-hxjhX_FHfdh', component:NewHysComponent},
  {path:'hsdhs_fhdsrfh3423_ew2323', component:NewProyectoComponent},
  {path:'agbgld-dasgdsa323edsgf13-13/:id', component:EditProyectoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
