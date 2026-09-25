import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';



@Component({

  selector: 'cb-item-card',

  template: `

    <h2>{{ title }}</h2>

    <button (click)="onSelect()">Select title</button>

  `

})

export class ItemCardComponent implements OnInit, OnChanges {

  @Input() title = '';

  @Output() titleSelected = new EventEmitter<string>();



  ngOnChanges(changes: SimpleChanges): void {

    // Respond when the parent updates the bound title input.

  }



  ngOnInit(): void {

    // Safe place for one-time setup after inputs are initialized.

  }



  onSelect(): void {

    this.titleSelected.emit(

      `Selected ${this.title} at ${new Date().toLocaleTimeString()}`

    );

  }

}
