import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { InsumoestimacionComponent } from './insumoestimacion/insumoestimacion.component';
import { AddtrabajadorComponent } from './addtrabajador/addtrabajador.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent }, 
    { path: 'login', component: LoginComponent },
    {path: 'insumo', component: InsumoestimacionComponent},
    {path: 'addtrabajador', component: AddtrabajadorComponent}
    ];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);