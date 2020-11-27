import { Routes } from '@angular/router';
import { RegistrarComponent } from './resgistrar/registrar/registrar.component';
import { HomeComponent } from '../app/home/home/home.component';
import { UsuarioComponent } from '../app/usuario/usuario/usuario.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'registrar', component: RegistrarComponent},
    {path: 'usuario/:id', component: UsuarioComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];
