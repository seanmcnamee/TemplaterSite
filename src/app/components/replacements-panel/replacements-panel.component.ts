import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tooltip } from 'bootstrap';
import { ReplacementItem } from '../replacement-item/replacement-item.component';

@Component({
  selector: 'app-replacements-panel',
  templateUrl: './replacements-panel.component.html',
  styleUrls: ['./replacements-panel.component.scss']
})
export class ReplacementsPanelComponent implements OnInit {
  @Input() replacementItems: ReplacementItem[] = [];
  @Output() itemsChanged = new EventEmitter<ReplacementItem[]>();

  newReplacementItem: ReplacementItem = new ReplacementItem();

  constructor() { }

  ngOnInit(): void {
    Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    .forEach(tooltipNode => new Tooltip(tooltipNode))
  }

  public onItemAdded(){
    this.replacementItems.push(new ReplacementItem());
    this.itemsChanged.emit(Array.from(this.replacementItems));
  }

  public onItemDeleted(item: ReplacementItem){
    this.replacementItems.splice(this.replacementItems.indexOf(item), 1);
    this.itemsChanged.emit(Array.from(this.replacementItems));
  }

  public onItemChanged(){
    this.itemsChanged.emit(Array.from(this.replacementItems));
  }
}
