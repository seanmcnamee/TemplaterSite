import { Component, OnInit } from '@angular/core';
import { ReplacementItem } from '../replacement-item/replacement-item.component';

@Component({
  selector: 'app-formatter',
  templateUrl: './formatter.component.html',
  styleUrls: ['./formatter.component.scss']
})
export class FormatterComponent implements OnInit {
  replacementItems: ReplacementItem[] = [];
  constructor() { }

  ngOnInit(): void {
    this.replacementItems = [new ReplacementItem("name", "sean"), new ReplacementItem("age", "22")];
  }

  public replacementItemsChanged(items: ReplacementItem[]): void {
    this.replacementItems = items;
  }
}
