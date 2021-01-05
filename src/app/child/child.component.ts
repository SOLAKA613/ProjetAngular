import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
  @Input() PData:String
  
  @Output() childEvent = new EventEmitter();
  
  constructor() { }

  onChange(value) {this.childEvent.emit(value);}
  ngOnInit(): void {
  }

}
