import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { IFormatterService } from 'src/app/services/formatter/formatter.service.interface';
import { ReplacementItem } from '../replacement-item/replacement-item.component';

@Component({
  selector: 'app-template-output-panel',
  templateUrl: './template-output-panel.component.html',
  styleUrls: ['./template-output-panel.component.scss']
})
export class TemplateOutputPanelComponent implements OnInit, OnChanges {
  @Input() replacementItems!: ReplacementItem[];
  @Input() templateValue!: string;
  @Output() templateValueChanged: EventEmitter<string> = new EventEmitter<string>();
  templatePlaceholder: string;
  outputValue!: string;

  constructor(private _formatter: IFormatterService) { 
    this.templatePlaceholder = "Welcome!\n\nUse template replacements with a {keyNameInBrackets}\n\nPress \"Generate from template\" to add any of your {keys} to the Replacements panel. Your {keys} can occur multiple times in your template.";
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.outputValue = this._formatter.format(this.templateValue, this._formatter.GetMap(this.replacementItems));
  }

  templateChanged(newTemplateValue: string){
    this.templateValue = newTemplateValue;
    this.templateValueChanged.emit(newTemplateValue);
    this.outputValue = this._formatter.format(this.templateValue, this._formatter.GetMap(this.replacementItems));
  }
}
