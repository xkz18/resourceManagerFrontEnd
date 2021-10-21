import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceRoutingModule } from './resource-routing.module';
import { ResourceComponent } from './resource.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';  
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatCheckboxModule } from '@angular/material/checkbox';
// import {
//   MatDatepickerModule,
//   MatMomentDateModule,
// } from '@coachcare/datepicker';

@NgModule({
  imports: [
    CommonModule,
    ResourceRoutingModule,
    FormsModule,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,

    // MatDatepickerModule,
    // MatMomentDateModule,
  ],
  declarations: [ResourceComponent],
})
export class ResourceModule {}
