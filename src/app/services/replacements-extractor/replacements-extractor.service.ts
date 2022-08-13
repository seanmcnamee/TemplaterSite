import { Injectable } from '@angular/core';
import { ReplacementItem } from 'src/app/components/replacement-item/replacement-item.component';
import { IReplacementsExtractorService } from './replacements-extractor.service.interface';

@Injectable({
  providedIn: 'root'
})
export class ReplacementsExtractorService implements IReplacementsExtractorService {

  constructor() { }

  public GetItemsFromTemplate(template: string): ReplacementItem[] {
    var keyMatches = [...new Set((template.match(/\{\w+\}/g)))];
    if (keyMatches.length > 0) {
      var replacementItems = keyMatches.map(key => new ReplacementItem(key.slice(1, key.length - 1), ""));
      return replacementItems;
    }
    return [];
  }

  
  public GetItemsFromJsonArray(jsonArray: any[]): ReplacementItem[] {
    if (!jsonArray || jsonArray.length <= 0) {
      return [];
    }

    jsonArray = jsonArray.slice(0, 1);

    var replacementItems = [];
    for(const properties of jsonArray) { /* For now, only grab first */
      for (const key in properties) {
        replacementItems.push(new ReplacementItem(key, properties[key]))
      }
    }
    return replacementItems;
  }
}