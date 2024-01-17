import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './ui/theme/layout/layout.component';
import { LayoutModule } from './ui/theme/layout/layout.module';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [],
  },  
];

@NgModule({
  imports: [
    LayoutModule,
    RouterModule,
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}