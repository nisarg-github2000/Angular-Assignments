import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slave',
  templateUrl: './slave.component.html',
  styleUrls: ['./slave.component.css']
})
export class SlaveComponent implements OnInit {

  @Input() orderA: string;
  @Output() repeatOrderEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  repeat(value: string) {
    this.repeatOrderEvent.emit(value);
  }

}
