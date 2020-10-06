import { DetailComponent } from './product/detail/detail.component';
import { MainComponent } from './main/main.component';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { combineAll } from 'rxjs-compat/operator/combineAll';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then((m) => m.ProductModule),
  },
   {
     path: '',
     component: MainComponent,
   },
   {
     path: 'home',
     component: MainComponent,
   },
   {
     path: 'detail',
     component: DetailComponent,
   },
   {
    path: '**',
    component: NotFoundComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
