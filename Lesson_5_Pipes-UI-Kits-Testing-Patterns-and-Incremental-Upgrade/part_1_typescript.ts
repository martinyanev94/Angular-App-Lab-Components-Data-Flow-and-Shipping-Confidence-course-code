import {Component } from '@angular/core';



@Component({

  template: `

    <h5>Author</h5>

    <p>{{ authorName | lowercase }}</p>

  `,

})

export class DemoPipeComponent {

  authorName = 'Sridhar Rao';

}
