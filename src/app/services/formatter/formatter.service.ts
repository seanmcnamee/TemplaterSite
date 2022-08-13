import { Injectable } from '@angular/core';
import { ReplacementItem } from 'src/app/components/replacement-item/replacement-item.component';
import { IFormatterService } from './formatter.service.interface';

@Injectable({
  providedIn: 'root'
})
export class FormatterService implements IFormatterService {

  constructor() { }

  public format(template: string, map: Map<string, string>): string {
    if (!template || !map) return template;

    for (const entry of map.entries()) {
        var key = entry[0], value = entry[1];
        var regEx = new RegExp("\\{" + key + "\\}", "gm");
        template = template.replace(regEx, value);
    }
    return template;
  }
  
  public GetMap(items: ReplacementItem[]): Map<string, string> {
    return new Map(
      items.map(item => [item.key, item.value])
    );
  }
}