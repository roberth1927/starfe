import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUsersModule } from './pages/home-users/home-users.module';
import { UsersRoutingModule } from './users-routing.module';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    HomeUsersModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
