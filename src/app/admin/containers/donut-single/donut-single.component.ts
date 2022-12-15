import { Component } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-single',
  template: `
    <div>
      <app-donut-form
        [donut]="donut"
        (create)="onCreate($event)"
      ></app-donut-form>
    </div>
  `,
  styles: [],
})
export class DonutSingleComponent {
  donut: Donut = {
    id: '123',
    name: 'Just Chocolate',
    icon: 'just-chocolate',
    price: 199,
    promo: 'limited',
    description: 'for the pure chocolate lovers',
  };

  onCreate(donut: Donut) {
    console.log('onCreate', donut);
  }
}
