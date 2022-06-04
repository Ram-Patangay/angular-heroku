import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmindataComponent } from './admindata/admindata.component';
import { AdminRoutingModule } from './admin-routing.module'


@NgModule({
  declarations: [
    AdmindataComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  entryComponents:[AdmindataComponent]
})
export class AdminModule { }
