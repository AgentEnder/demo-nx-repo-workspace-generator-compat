import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'test-test6',
  templateUrl: './test6.component.html',
  styleUrls: ['./test6.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Test6Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
