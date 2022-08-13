import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tooltip } from 'bootstrap';
import { ErrorAlertItem, IErrorAlertsService } from 'src/app/services/error-alerts/arror-alerts.service.interface';
import { ReplacementItem } from '../replacement-item/replacement-item.component';
import { IReplacementsExtractorService } from 'src/app/services/replacements-extractor/replacements-extractor.service.interface';
import { ISpreadsheetReaderService } from 'src/app/services/spreadsheet-reader/spreadsheet-reader.service.interface';
import * as $ from 'jquery';

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
  generateFromSpreadsheetAllowed: boolean = true;
  newReplacementItem: ReplacementItem = new ReplacementItem();

  constructor(
    private _errorAlertsService: IErrorAlertsService,
    private _replacementsExtractorService: IReplacementsExtractorService,
    private _spreadsheetReaderService: ISpreadsheetReaderService) { }

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
    var newReplacementItems = this._replacementsExtractorService.GetItemsFromTemplate(this.template);

    if (newReplacementItems.length > 0) {
      this.replacementItems = this.replacementItems.concat(newReplacementItems);
      this.itemsChanged.emit(Array.from(this.replacementItems));
      this.generateFromTemplateAllowed = true;
    } else {
      this._errorAlertsService.AddErrorAndBroadcast(new ErrorAlertItem("No keys were defined in the template!", 2000, true,
        (item) => this.generateFromTemplateAllowed = true));
    }
  }

  public triggerUpload(id: string){
    $(`#${id}`).trigger('focus').trigger('click');
  }
  public uploadSpreadsheet(event: Event) {
    this.generateFromSpreadsheetAllowed = false;
    const element = event.target as HTMLInputElement;

    let fileList: FileList | null = element.files;
    if (fileList && fileList.length == 1) {
      this._spreadsheetReaderService.GetJsonArrays(fileList[0])
        .then((data) => {
          var newReplacementItems = this._replacementsExtractorService.GetItemsFromJsonArray(data);
          if (newReplacementItems.length > 0) {
            this.replacementItems = this.replacementItems.concat(newReplacementItems);
            this.itemsChanged.emit(Array.from(this.replacementItems));
            this.generateFromSpreadsheetAllowed = true;
          } else {
            this._errorAlertsService.AddErrorAndBroadcast(new ErrorAlertItem("No rows could be parsed from the uploaded file. Please ensure each key is in its own column", 5000, true,
            (item) => this.generateFromSpreadsheetAllowed = true));
          }
        }).catch((error) => {
          this._errorAlertsService.AddErrorAndBroadcast(new ErrorAlertItem(error, 2000, true,
            (item) => this.generateFromSpreadsheetAllowed = true));
        })
    } else {
      this.generateFromSpreadsheetAllowed = true;
    }
    $(element).val(''); //Reset upload input
  }

  public onItemDeleted(item: ReplacementItem) {
    this.replacementItems.splice(this.replacementItems.indexOf(item), 1);
    this.itemsChanged.emit(Array.from(this.replacementItems));
  }

  public onItemChanged() {
    this.itemsChanged.emit(Array.from(this.replacementItems));
  }
}
