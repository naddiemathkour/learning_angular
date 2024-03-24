import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewpostsComponent } from './viewposts.component';

const routes: Routes = [{ path: '', component: ViewpostsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewpostsRoutingModule {}
