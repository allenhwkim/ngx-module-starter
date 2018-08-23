import { Component, OnInit } from '@angular/core';

import { DataService } from '../services';

/**
 * The ThreeComponent renders a value and its square.
 */
@Component({
  selector: 'my-component-3',
  templateUrl: './three.component.html',
  styleUrls: []
})
export class ThreeComponent implements OnInit {
  public value: number;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((result: number) => {
      this.value = result;
    });
  }
}
