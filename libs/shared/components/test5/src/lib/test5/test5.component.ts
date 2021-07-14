import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'test-test5',
  templateUrl: './test5.component.html',
  styleUrls: ['./test5.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Test5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
