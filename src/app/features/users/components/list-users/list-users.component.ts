import { Component, Input, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { UsersService } from '../../../services/users.service';
import { User } from '../../../../../core/interfaces/reqResUser.interface';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class ListUsersComponent implements OnInit {

  dataSource: User[] = [];
  columnsToDisplay = ['name', 'birthdate', 'email', 'phone_number'];
  columnsName: any = {
    name: 'Nombre',
    birthdate: 'Fecha Nacimiento',
    email: 'Email',
    phone_number: 'Telefono',
  };
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: { signature: string } | null;
  length = 0;
  pageSize = 10;
  pageIndex = 0;
  from = 0;
  @Input() dataUsers: any = '';

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();

    this.userService.Users.subscribe(data => {
      this.dataSource = data.data;
      this.length = data.total;
    });
  }

  getUsers() {
    this.userService
      .getUsers({ limit: this.pageSize, from: this.from })
      .subscribe((response) => {
        this.dataSource = response.data.data;
        this.length = response.data.total;
      });
  }

  handlePageEvent(e: any) {
    this.from = this.pageSize * e.pageIndex;
    this.getUsers();
  }

}
