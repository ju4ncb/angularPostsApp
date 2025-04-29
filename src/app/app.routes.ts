import { Routes } from '@angular/router';
import { Parcial2Component } from './parcial2/parcial2.component';


export const routes: Routes = [
    {path:"", pathMatch:"full", redirectTo:"parcial2"},
    {path:"parcial2", component: Parcial2Component},
];
