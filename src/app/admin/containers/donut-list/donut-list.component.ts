import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-list',
  template: `
    <div>
      <ng-container *ngIf="donuts.length; else nothing">
        <app-donut-card
          *ngFor="let donut of donuts; trackBy: trackById"
          [donut]="donut"
        ></app-donut-card>
      </ng-container>

      <ng-template #nothing><p>no donuts found..</p></ng-template>
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
        promo: 'limited',
        description: 'for the pure chocolate lovers',
      },
      {
        id: '456',
        name: 'Glazed Fudge',
        icon: 'glazed-fudge',
        price: 129,
        promo: 'new',
        description: 'sticky perfection',
      },
      {
        id: '789',
        name: 'Caramel Swirl',
        icon: 'caramel-swirl',
        price: 210,
        description: 'chocolate drizzle with caramel',
      },
      {
        id: '78fththh9',
        name: 'Sour Supreme',
        icon: 'sour-supreme',
        price: 139,
        description: 'for the sour advocate',
      },
      {
        id: '78hhh9',
        name: 'Zesty Lemon',
        icon: 'zesty-lemon',
        price: 129,
        description: 'delicious lucious lemon',
      },
    ];

    this.donut = this.donuts[0];
  }

  trackById(index: number, value: Donut) {
    console.log(index, value);
    return value.id;
  }
}
