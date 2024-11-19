import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SilviaComponent } from './pages/silvia/silvia.component';
import { LugaresComponent } from './pages/lugares/lugares.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';


const routes: Routes = [

  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  //{ path: '**', redirectTo: '/home' },
  { path: 'about', component: AboutComponent},
  { path: 'conoce_silvia', component: SilviaComponent},
  { path: 'lugares_turisticos', component: LugaresComponent},
  { path: 'ingresar', component: LoginComponent},
  { path: 'registrarse', component: RegisterComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


