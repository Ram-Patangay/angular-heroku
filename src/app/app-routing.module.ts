import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ {
  path: 'customers',
  loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
},
{
  path: 'admin',
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
},
{
  path: 'settings',
  loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule)
},
// {
//   path: '',
//   redirectTo: '',
//   pathMatch: 'full'
// }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
