import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCustomTableComponent } from './mat-custom-table.component';
import { TableActionDirective } from './directives/table-action.directive';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { MatButtonModule } from '@angular/material/button';
import { CdkTableModule } from '@angular/cdk/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [MatCustomTableComponent, TableActionDirective, ActionButtonsComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    CdkTableModule,
    MatMenuModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    MatSortModule
  ],
  exports: [MatCustomTableComponent]
})
export class MatCustomTableModule { }
