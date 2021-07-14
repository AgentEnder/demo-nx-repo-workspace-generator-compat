import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test4Component } from './test4/test4.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    Test4Component
  ],
  exports: [
    Test4Component
  ],
})
export class SharedComponentsTest4Module {}
