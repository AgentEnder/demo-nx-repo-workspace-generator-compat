import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test2Component } from './test2/test2.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    Test2Component
  ],
  exports: [
    Test2Component
  ],
})
export class SharedComponentsTest2Module {}
