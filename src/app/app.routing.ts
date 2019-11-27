import { ModuleWithProviders  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componentes
import { CompetitorFormComponent } from './components/competitor-form/competitor-form.component';
import { CompetitorInfoComponent } from './components/competitor-info/competitor-info.component';
import {HomeComponent} from './components/home/home.component';
import {IniciarSesionComponent} from './components/iniciar-sesion/iniciar-sesion.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';

//Array de rutas
const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'login',component: IniciarSesionComponent},
  { path: 'competitor-info',component: CompetitorInfoComponent},
  { path: 'competitor-form',component: CompetitorFormComponent}
];

//Exportar el modulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);