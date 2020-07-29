import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsumoestimacionComponent } from './insumoestimacion/insumoestimacion.component';
import { AddtrabajadorComponent } from './addtrabajador/addtrabajador.component';
import { AddinsumoComponent } from './addinsumo/addinsumo.component';
import { CronogramaComponent } from './cronograma/cronograma.component';
import { DetallesProyectoComponent } from './detalles-proyecto/detalles-proyecto/detalles-proyecto.component';
import { DetallesImplicadosComponent } from './detalles-implicados/detalles-implicados.component';
import { CalibracionUsuarioComponent } from './calibracion-usuario/calibracion-usuario.component';
import { LoginComponent } from './login/login.component';
import { RecuperacionComponent } from './recuperacion/recuperacion.component';
import { NuevaContraseniaComponent } from './nueva-contrasenia/nueva-contrasenia.component';
import { CronogramaActividadesComponent } from './cronograma-actividades/cronograma-actividades.component';
import { CalibracionComponent } from './calibracion/calibracion.component';
import { MenuComponent } from './menu/menu.component';
import { appRoutingProviders, routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    InsumoestimacionComponent,
    AddtrabajadorComponent,
    AddinsumoComponent,
    CronogramaComponent,
    DetallesProyectoComponent,
    DetallesImplicadosComponent,
    CalibracionUsuarioComponent,
    LoginComponent,
    RecuperacionComponent,
    NuevaContraseniaComponent,
    CalibracionComponent,
    CronogramaActividadesComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
