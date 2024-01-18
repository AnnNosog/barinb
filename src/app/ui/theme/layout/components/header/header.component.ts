import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule, 
    MatDialogModule
  ]
})
export class HeaderComponent {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  //NavigationPath = NavigationPath;

  constructor(private readonly matDialog: MatDialog) {}

  // onOpenDialog(): void {
  //   this.matDialog.open(HelpDialogComponent);
  // }
}