import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmindataComponent } from './admindata/admindata.component';
const routes: Routes = [
  {
    path: '',
    component: AdmindataComponent,
  },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
