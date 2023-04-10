import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { NewBoardComponent } from '../forms/new-board/new-board.component';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(NewBoardComponent,{});
  }
}
