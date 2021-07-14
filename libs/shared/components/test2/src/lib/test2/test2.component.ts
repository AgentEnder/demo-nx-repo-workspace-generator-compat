import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'test-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Test2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
