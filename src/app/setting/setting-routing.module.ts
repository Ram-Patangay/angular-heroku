import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingdataComponent } from './settingdata/settingdata.component'
const routes: Routes = [
  {path:'',component:SettingdataComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
