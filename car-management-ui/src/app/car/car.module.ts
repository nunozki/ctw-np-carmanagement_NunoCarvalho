import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: 'car/create', component: CreateComponent },
  { path: 'car', component: IndexComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CarModule { }
