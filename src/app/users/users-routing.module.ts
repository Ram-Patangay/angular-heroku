import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserdataComponent } from './userdata/userdata.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
const routes: Routes = [
  {
    path: '',
    component: UserdataComponent,
  },
  {
    path: 'order',
    component: OrderdetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
