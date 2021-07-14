import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'test-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Test3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
