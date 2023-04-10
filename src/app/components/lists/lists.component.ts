import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent {
  @Input() lists = [{
    name: 'Tareas',
    cardList: [
      {name: 'efe', isActive: true},
      {name: 'efe', isActive: true},
      {name: 'efe', isActive: false},
      {name: 'efe', isActive: false},
      {name: 'efe', isActive: true},
    ]
  }];
  
}
