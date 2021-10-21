

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Addr2pRoutingModule } from './addr2p-routing.module';
import { Addr2pComponent } from './addr2p.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, Addr2pRoutingModule, FormsModule],
  declarations: [Addr2pComponent],
})
export class Addr2pModule {}

