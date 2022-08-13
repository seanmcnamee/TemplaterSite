import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tooltip } from 'bootstrap';
import { ErrorAlertItem, IErrorAlertsService } from 'src/app/services/error-alerts/arror-alerts.service.interface';
import { ReplacementItem } from '../replacement-item/replacement-item.component';

@Component({
  selector: 'app-replacements-panel',
  templateUrl: './replacements-panel.component.html',
  styleUrls: ['./replacements-panel.component.scss']
})
export class ReplacementsPanelComponent implements OnInit {
  @Input() replacementItems: ReplacementItem[] = [];
  @Input() template!: string;
  @Output() itemsChanged = new EventEmitter<ReplacementItem[]>();

  generateFromTemplateAllowed: boolean = true;
  newReplacementItem: ReplacementItem = new ReplacementItem();

  constructor(private _errorAlertsService: IErrorAlertsService) { }

  ngOnInit(): void {
    Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      .forEach(tooltipNode => new Tooltip(tooltipNode))
  }

  public onItemAdded() {
    this.replacementItems.push(new ReplacementItem());
    this.itemsChanged.emit(Array.from(this.replacementItems));
  }

  public addKeysFromTemplate() {
    this.generateFromTemplateAllowed = false;

    var keyMatches = [...new Set((this.template.match(/\{\w+\}/g)))];
    if (keyMatches.length > 0) {
      var newReplacementItems = keyMatches.map(key => new ReplacementItem(key.slice(1, key.length - 1), ""));
      this.replacementItems = this.replacementItems.concat(newReplacementItems);
      this.itemsChanged.emit(Array.from(this.replacementItems));
      this.generateFromTemplateAllowed = true;
    } else {
      this._errorAlertsService.AddErrorAndBroadcast(new ErrorAlertItem("No keys were defined in the template!", 2000, true,
        (item) => this.generateFromTemplateAllowed = true));
    }

  }

  public onItemDeleted(item: ReplacementItem) {
    this.replacementItems.splice(this.replacementItems.indexOf(item), 1);
    this.itemsChanged.emit(Array.from(this.replacementItems));
  }

  public onItemChanged() {
    this.itemsChanged.emit(Array.from(this.replacementItems));
  }
}
