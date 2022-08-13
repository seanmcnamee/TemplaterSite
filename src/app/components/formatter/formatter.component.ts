import { Component, OnInit } from '@angular/core';
import { ReplacementItem } from '../replacement-item/replacement-item.component';

@Component({
  selector: 'app-formatter',
  templateUrl: './formatter.component.html',
  styleUrls: ['./formatter.component.scss']
})
export class FormatterComponent implements OnInit {
  replacementItems: ReplacementItem[] = [];
  template: string = '';

  constructor() { }

  ngOnInit(): void {
    this.replacementItems = [];
  }

  public replacementItemsChanged(items: ReplacementItem[]): void {
    this.replacementItems = items;
  }

  public templateChanged(newTemplate: string) {
    this.template = newTemplate;
  }
}