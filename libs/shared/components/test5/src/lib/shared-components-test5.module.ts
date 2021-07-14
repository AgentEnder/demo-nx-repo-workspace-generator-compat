import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test5Component } from './test5/test5.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    Test5Component
  ],
  exports: [
    Test5Component
  ],
})
export class SharedComponentsTest5Module {}
