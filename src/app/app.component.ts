import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToDoApp';
  
cards = [
  {
    name: 'Tareas',
    taskList: [
      {name: 'efe', isActive: true},
      {name: 'efe', isActive: true},
      {name: 'efe', isActive: false},
      {name: 'efe', isActive: false},
      {name: 'efe', isActive: true},
    ]
  }
]
}
