import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-list',
  template: `
    <div>
      <app-donut-card [donut]="donuts[0]"></app-donut-card>
      <app-donut-card [donut]="donuts[1]"></app-donut-card>
      <app-donut-card [donut]="donuts[2]"></app-donut-card>
    </div>
  `,
  styles: [],
})
export class DonutListComponent implements OnInit {
  donut!: Donut;
  donuts!: Donut[];

  ngOnInit() {
    this.donuts = [
      {
        id: '123',
        name: 'Just Chocolate',
        icon: 'just-chocolate',
        price: 199,
        description: 'for the pure chocolate lovers',
      },
      {
        id: '456',
        name: 'Glazed Fudge',
        icon: 'glazed-fudge',
        price: 129,
        promo: true,
        description: 'sticky perfection',
      },
      {
        id: '789',
        name: 'Caramel Swirl',
        icon: 'caramel-swirl',
        price: 210,
        description: 'chocolate drizzle with caramel',
      },
    ];

    this.donut = this.donuts[0];
  }
}
