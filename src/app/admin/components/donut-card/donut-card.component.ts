import {
  CommonModule,
  CurrencyPipe,
  NgSwitch,
  NgSwitchCase,
} from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-card',
  standalone: true,
  imports: [RouterModule, CommonModule, NgSwitch, NgSwitchCase, CurrencyPipe],
  encapsulation: ViewEncapsulation.Emulated,
  template: `
    <a
      class="donut-card"
      [routerLink]="donut.id"
      [ngClass]="{
        'donut-card-promo': donut.promo
      }"
    >
      <img
        src="/assets/img/{{ donut.icon }}.svg"
        [alt]="donut.name"
        class="donut-card-icon"
      />
      <div>
        <p class="donut-card-name">{{ donut.name }}</p>
        <ng-container [ngSwitch]="donut.promo" ]>
          <span *ngSwitchCase="'new'" class="donut-card-label">NEW</span>
          <span *ngSwitchCase="'limited'" class="donut-card-label"
            >limited</span
          >
        </ng-container>
        <p class="donut-card-price">
          {{ donut.price / 100 | currency : 'CAD' }}
        </p>
      </div>
    </a>
  `,
  styles: [
    `
      .donut-card {
        display: flex;
        align-items: center;
        background: #f7f7f7;
        border-radius: 5px;
        margin-bottom: 5px;
        padding: 5px 15px;
        transition: transform 0.2s ease-in-out;
        &:hover {
          transform: translateY(-3px);
        }
        &-name {
          font-size: 16px;
          padding-left: 15px;
        }
        &-price {
          font-size: 14px;
          color: #c14583;
          padding-left: 15px;
        }
        &-icon {
          width: 50px;
          margin-right: 10x;
        }
        &-promo {
          border-radius: 1px solid red;
        }
        &-label {
          border: 1px solid red;
          border-radius: 4px;
          margin-left: 15px;
          font-size: 12px;
          color: red;
        }
      }
    `,
  ],
})
export class DonutCardComponent {
  @Input() donut!: Donut;
}
