import { Component, OnInit, ViewChild } from '@angular/core';
import { SideMenuComponent } from 'src/app/shared/side-menu/side-menu.component';


@Component({
  selector: 'app-home-users',
  templateUrl: './home-users.component.html',
  styleUrls: ['./home-users.component.scss']
})
export class HomeUsersComponent implements OnInit {

  @ViewChild('side') side: any ;
  isOpen: boolean = true

  constructor() { }

  ngOnInit(): void {
  }
  isChanged(isOpen: boolean): void {
   /*  this.store.dispatch(
      toggleMenuForm({ isOpen })
    ); */
    this.isOpen = isOpen

    this.side?.open()
  }

}
