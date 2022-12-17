import { RouterModule, Routes } from '@angular/router';

//containers
import { DonutListComponent } from './containers/donut-list/donut-list.component';
import { DonutSingleComponent } from './containers/donut-single/donut-single.component';

export const AdminRoutes: Routes = [
  { path: 'donuts', component: DonutListComponent },
  {
    path: 'donuts/new',
    component: DonutSingleComponent,
    data: { isEdit: false },
  },
  {
    path: 'donuts/:id',
    component: DonutSingleComponent,
    data: { isEdit: true },
  },
  { path: '', pathMatch: 'full', redirectTo: 'donuts' },
];
