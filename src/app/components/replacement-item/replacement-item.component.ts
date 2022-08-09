import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: '[replacementItem]',
  templateUrl: './replacement-item.component.html',
  styleUrls: ['./replacement-item.component.scss']
})
export class ReplacementItemComponent implements OnInit {
  @Input() item!: ReplacementItem;
  
  @Output() deleteEvent = new EventEmitter<number>();
  @Output() changeEvent = new EventEmitter<ReplacementItem>();

  constructor() { }

  ngOnInit(): void {
  }

  public onDelete() {
    this.deleteEvent.emit(this.item.id);
  }
  public onKeyChange(newKey: string){
    this.item.key = newKey;
    this.changeEvent.emit(this.item);
  }
  public onValueChange(newValue: string){
    this.item.value = newValue;
    this.changeEvent.emit(this.item);
  }
}
export class ReplacementItem {
  id: number;
  key: string;
  value: string;

  constructor(id: number, key: string, value: string) {
    this.id = id;
    this.key = key;
    this.value = value;
  }
}
