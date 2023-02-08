import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPage } from './user.page';

const routes: Routes = [
  {
    path: '',
    component: UserPage,
    children: [
      {
        path: 'auth/login',
        loadChildren: () => import('../User/auth/auth.module').then( m => m.AuthPageModule)
      },
      {
        path: 'auth/signup',
        loadChildren: () => import('../User/auth/auth.module').then( m => m.AuthPageModule)
      },
      {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPageRoutingModule {}
