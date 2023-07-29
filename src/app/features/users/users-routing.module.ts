import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeUsersComponent } from './pages/home-users/home-users.component';


const routes: Routes = [
  {
    component: HomeUsersComponent,
    path: '',

  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule { }
