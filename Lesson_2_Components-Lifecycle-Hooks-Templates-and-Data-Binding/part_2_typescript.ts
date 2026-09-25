import { Component } from '@angular/core';



@Component({

  selector: 'cb-item-card',

  template: `<h2>{{ title }}</h2>`

})

export class ItemCardComponent {

  title = 'CatalogBench title';

}
