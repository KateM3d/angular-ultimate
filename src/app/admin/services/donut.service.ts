import { Injectable } from '@angular/core';
import { Donut } from '../models/donut.model';

@Injectable({
  providedIn: 'root',
})
export class DonutService {
  private donuts: Donut[] = [
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

  constructor() {}

  read() {
    return this.donuts;
  }

  readOne(id: string) {
    const donut = this.read().find((donut: Donut) => donut.id === id);
    if (donut) {
      return donut;
    }
    return {
      name: '',
      icon: '',
      price: 0,
      description: '',
    };
  }

  create(payload: Donut) {
    this.donuts = [...this.donuts, payload];
    console.log(this.donuts);
  }

  update(payload: Donut) {
    this.donuts = this.donuts.map((donut: Donut) => {
      if (donut.id === payload.id) {
        return payload;
      }
      return donut;
    });
    console.log(this.donuts);
  }

  delete(payload: Donut) {
    this.donuts = this.donuts.filter((donut: Donut) => donut.id !== payload.id);
    console.log(this.donuts);
  }
}
