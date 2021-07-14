import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test3Component } from './test3/test3.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    Test3Component
  ],
  exports: [
    Test3Component
  ],
})
export class SharedComponentsTest3Module {}
