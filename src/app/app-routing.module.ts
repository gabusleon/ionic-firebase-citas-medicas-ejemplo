import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'crear-cita',
    loadChildren: () => import('./crear-cita/crear-cita.module').then( m => m.CrearCitaPageModule)
  },
  {
    path: 'editar-cita/:id',
    loadChildren: () => import('./editar-cita/editar-cita.module').then( m => m.EditarCitaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
