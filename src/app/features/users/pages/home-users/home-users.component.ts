import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-users',
  templateUrl: './home-users.component.html',
  styleUrls: ['./home-users.component.scss'],
})
export class HomeUsersComponent implements OnInit {
  Users: any = [];
  @ViewChild('side') side: any;
  isOpen: boolean = true;

  constructor() {}

  ngOnInit(): void {}
  isChanged(isOpen: boolean): void {
    this.isOpen = isOpen;
    this.side?.open();
  }

  filterUsers(e: any) {
    this.Users = e;
    console.log("Home-card", this.Users)
  }
}
