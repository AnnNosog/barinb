import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';


describe('HeaderComponent', () => {
  let matDialogMock: MatDialog;
  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          MatToolbarModule,
          MatButtonModule,
          MatIconModule,
          MatDialogModule,
        ],
        declarations: [HeaderComponent],
        providers: [],
      }).compileComponents();
    })
  );

})