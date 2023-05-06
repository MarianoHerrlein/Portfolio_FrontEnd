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


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  //{ path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'nuevaexp', component: NewExperienciaComponent },
  { path: 'editexp/:id', component: EditExperienciaComponent },
  { path: 'nuevaedu', component: NewEducacionComponent },
  {path:'editedu/:id', component:EditEducacionComponent},
  {path:'editpers/:id',component:EditPersonaComponent},
  {path:'edithys/:id', component:EditHysComponent},
  {path:'newhys', component:NewHysComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
