import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'test-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
