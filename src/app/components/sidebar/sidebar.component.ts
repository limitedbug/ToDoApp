import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { NewBoardComponent } from '../forms/new-board/new-board.component';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  boards:any = []
  constructor(public dialog: MatDialog) {}
  isShowing: boolean = true;
  openDialog() {
    this.dialog.open(NewBoardComponent,{});
  }
  toggleSidenav() {
    this.isShowing = !this.isShowing;
  }
}
