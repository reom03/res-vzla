import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'state/:id',
    loadChildren: () => import('./state/state.module').then( m => m.StatePageModule)
  },
  {
    path: 'municipality/:stateId/:id',
    loadChildren: () => import('./municipality/municipality.module').then( m => m.MunicipalityPageModule)
  },
  {
    path: 'parrish/:stateId/:muniId/:id',
    loadChildren: () => import('./parish/parish.module').then( m => m.ParishPageModule)
  },
  {
    path: 'center/:stateId/:muniId/:parrishId/:id',
    loadChildren: () => import('./center/center.module').then( m => m.CenterPageModule)
  },
  {
    path: 'table/:stateId/:muniId/:parrishId/:centerId/:id',
    loadChildren: () => import('./table/table.module').then( m => m.TablePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
