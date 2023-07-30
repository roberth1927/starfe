import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-header-card',
  templateUrl: './header-card.component.html',
  styleUrls: ['./header-card.component.scss'],
})
export class HeaderCardComponent implements OnInit {
  @Output() filterValueChanged = new EventEmitter<any>();
  dataUser: any = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {}

  onFilterValueChange(event: any) {
    const name = event?.target?.value ?? '';
    this.usersService.searchUsersByName(name).subscribe((response) => {
      this.dataUser = response.data;
      this.filterValue();
    });
  }

  filterValue(){
    this.filterValueChanged.emit(this.dataUser)
  }
}
