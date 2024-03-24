import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'create',
    loadChildren: () =>
      import('./components/createpost/createpost.module').then(
        (m) => m.CreatepostModule
      ),
  },
  {
    path: 'view',
    loadChildren: () =>
      import('./components/viewposts/viewposts.module').then(
        (m) => m.ViewpostsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
