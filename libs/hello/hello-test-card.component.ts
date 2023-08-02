import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'openchat-hello-test-card',
  templateUrl: './hello-test-card.component.html',
  styleUrls: ['./hello-test-card.component.scss'],
})
export class HelloTestCardComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {}

}
@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  declarations: [HelloTestCardComponent],
  exports: [HelloTestCardComponent],
})
export class HelloTestCardComponentModule {}