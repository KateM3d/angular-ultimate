import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { DonutListComponent } from './admin/containers/donut-list/donut-list.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AdminModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
