import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Form1Component } from './form1/form1.component';

const routes: Routes = [
  {
    path: 'form', component: Form1Component
  },
  {
    path: 'list', component: ListComponent
  },
  { path: '', redirectTo: 'form', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
