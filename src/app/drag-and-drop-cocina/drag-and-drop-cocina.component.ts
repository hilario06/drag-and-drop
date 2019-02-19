import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-and-drop-cocina',
  templateUrl: './drag-and-drop-cocina.component.html',
  styleUrls: ['./drag-and-drop-cocina.component.css']
})
export class DragAndDropCocinaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  pendiente = [
    'arroz con Pato',
    'guiso',
    'ceviche',
    'sopa de quion'
  ];

  preparacion = [
    'sopa de gallina',
    'cahufa',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
