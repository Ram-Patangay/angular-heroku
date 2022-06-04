import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserdataComponent } from './userdata/userdata.component';
import { UsersRoutingModule } from '../users/users-routing.module';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';


@NgModule({
  declarations: [
    UserdataComponent,
    OrderdetailsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  entryComponents:[UserdataComponent]
})
export class UsersModule { }
