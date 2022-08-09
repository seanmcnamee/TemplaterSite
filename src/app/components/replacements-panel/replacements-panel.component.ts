import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReplacementItem } from '../replacement-item/replacement-item.component';

@Component({
  selector: 'app-replacements-panel',
  templateUrl: './replacements-panel.component.html',
  styleUrls: ['./replacements-panel.component.scss']
})
export class ReplacementsPanelComponent implements OnInit {
  @Input() replacementItems: ReplacementItem[] = [];
  @Output() itemsChanged = new EventEmitter<ReplacementItem[]>();

  constructor() { }

  ngOnInit(): void {
  }

  public onItemDeleted(itemId: number){
    this.replacementItems.splice(itemId, 1);
    this.itemsChanged.emit(this.replacementItems);
  }

  public onItemChanged(item: ReplacementItem){
    this.replacementItems[item.id] = item;
    this.itemsChanged.emit(Array.from(this.replacementItems));
  }
}
