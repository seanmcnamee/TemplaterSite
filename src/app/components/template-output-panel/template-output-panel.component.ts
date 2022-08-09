import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IFormatterService } from 'src/app/services/formatter/formatter.service.interface';
import { ReplacementItem } from '../replacement-item/replacement-item.component';

@Component({
  selector: 'app-template-output-panel',
  templateUrl: './template-output-panel.component.html',
  styleUrls: ['./template-output-panel.component.scss']
})
export class TemplateOutputPanelComponent implements OnInit, OnChanges {
  @Input() replacementItems!: ReplacementItem[];
  templateValue!: string;
  outputValue!: string;

  constructor(private _formatter: IFormatterService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.outputValue = this._formatter.format(this.templateValue, this._formatter.GetMap(this.replacementItems));
  }

  templateChanged(newTemplateValue: string){
    this.templateValue = newTemplateValue;
    this.outputValue = this._formatter.format(this.templateValue, this._formatter.GetMap(this.replacementItems));
  }
}
