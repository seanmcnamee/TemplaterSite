import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: '[replacementItem]',
  templateUrl: './replacement-item.component.html',
  styleUrls: ['./replacement-item.component.scss']
})
export class ReplacementItemComponent implements OnInit {
  @Input() item!: ReplacementItem;
  
  @Output() deleteEvent = new EventEmitter<ReplacementItem>();
  @Output() changeEvent = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  public onDelete() {
    this.deleteEvent.emit(this.item);
  }
  public onKeyChange(newKey: string){
    this.item.key = newKey;
    this.changeEvent.emit();
  }
  public onValueChange(newValue: string){
    this.item.value = newValue;
    this.changeEvent.emit();
  }
}
export class ReplacementItem {
  static idNum: number = 0;
  id!: string;
  key: string;
  value: string;

  constructor(key?: string, value?: string) {
    this.id = String(ReplacementItem.idNum++);
    this.key = key ?? "";
    this.value = value ?? "";
  }
}
