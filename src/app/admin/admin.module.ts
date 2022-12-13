import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//containers
import { DonutListComponent } from './containers/donut-list/donut-list.component';
import { DonutCardComponent } from './components/donut-card/donut-card.component';

//components
import { DonutSingleComponent } from './containers/donut-single/donut-single.component';
import { DonutFormComponent } from './components/donut-form/donut-form.component';

@NgModule({
  declarations: [
    DonutListComponent,
    DonutSingleComponent,
    DonutCardComponent,
    DonutFormComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [DonutListComponent, DonutSingleComponent],
})
export class AdminModule {}
