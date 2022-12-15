import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'app-donut-single',
  template: `
    <div>
      <app-donut-form
        [donut]="donut"
        (create)="onCreate($event)"
        (update)="onUpdate($event)"
        (delete)="onDelete($event)"
      ></app-donut-form>
    </div>
  `,
  styles: [],
})
export class DonutSingleComponent implements OnInit {
  donut!: Donut;

  constructor(private donutService: DonutService) {}

  ngOnInit(): void {
    // this.donut = this.donutService.readOne('123');
  }
  onCreate(donut: Donut) {
    this.donutService.create(donut);
  }

  onUpdate(donut: Donut) {
    this.donutService.update(donut);
  }

  onDelete(donut: Donut) {
    this.donutService.delete(donut);
  }
}
