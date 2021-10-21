// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-addresource',
//   templateUrl: './addresource.component.html',
//   styleUrls: ['./addresource.component.css']
// })
// export class AddresourceComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray,
  transferArrayItem,} from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop connected sorting
 */
@Component({
  selector: 'app-addresource',
  templateUrl: 'addresource.component.html',
  styleUrls: ['addresource.component.css'],
})
export class AddresourceComponent {
  resourceCatalog = [
    'Utilities',
    'Transportation',
    'Waterway',
    'Process interconnections'
  ];

  project = [
    
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
    // console.log(this.done);
  }
}


