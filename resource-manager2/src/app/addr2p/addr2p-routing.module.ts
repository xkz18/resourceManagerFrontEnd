import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Addr2pComponent } from './addr2p.component';

const routes: Routes = [
  {
    path: 'c',
    component: Addr2pComponent,
    children: [
      {
        path: 'child',
        component: Addr2pComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Addr2pRoutingModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
