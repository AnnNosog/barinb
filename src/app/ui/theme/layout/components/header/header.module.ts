import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    RouterModule, 
    MatToolbarModule,
    MatButtonModule,
    MatIconModule, 
    MatDialogModule
    ],
  declarations: [],
  exports: [],
})
export class HeaderModule {}