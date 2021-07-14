import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'test-test4',
  templateUrl: './test4.component.html',
  styleUrls: ['./test4.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Test4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
