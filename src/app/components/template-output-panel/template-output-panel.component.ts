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
    this.templatePlaceholder = "Welcome! Enter your template here\n\nHere are some pointers to get you started:\n1. Template replacements are available by specifying a {keyNameInBrackets}\n2. The same key can be used multiple times in a template\n3. Press \"Generate from template\" to add any keys from your Template to the Replacements panel\n4. Use \"Upload from spreadsheet\" to grab keys from a spreadsheet (column per key)";
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
