import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewpostsRoutingModule } from './viewposts-routing.module';
import { ViewpostsComponent } from './viewposts.component';


@NgModule({
  declarations: [
    ViewpostsComponent
  ],
  imports: [
    CommonModule,
    ViewpostsRoutingModule
  ]
})
export class ViewpostsModule { }
