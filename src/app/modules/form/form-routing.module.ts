import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TruenorthformComponent } from './truenorthform/truenorthform.component';

const routes: Routes = [
  {
    path:'',
    component:TruenorthformComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
