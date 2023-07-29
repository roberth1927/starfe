import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUsersComponent } from './home-users.component';
import { ComponentsModule } from '../../components/components.module';
import { SideMenuModule } from 'src/app/shared/side-menu/side-menu.module';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    HomeUsersComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    SideMenuModule,
    MatCardModule
  ]
})
export class HomeUsersModule { }
