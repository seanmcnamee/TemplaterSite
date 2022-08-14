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

    jsonArray = jsonArray.slice(0, 1);  /* For now, only grab first */

    var replacementItems = [];
    for (const properties of jsonArray) {
      for (const key in properties) {
        replacementItems.push(new ReplacementItem(key, properties[key]))
      }
    }
    return replacementItems;
  }

  /* For now, only take 1 set of replacements first */
  public GetJsonArrayFromItems(items: ReplacementItem[]): object[] {
    var jsonObject: Record<string, any> = {};
    items.forEach((item: ReplacementItem) => {
      this.setObjValue(jsonObject, item.key, item.value);
    })
    return [jsonObject]; /* for now, only return one object in the array */
  }

  private setObjValue(obj: Record<string, any> = {}, key: string, value: any) {
    var pathArr = key.split('.');
    this.setObjDeepValue(obj, pathArr, value);
  }
  private setObjDeepValue(obj: Record<string, any>, pathArr: string[], value: any) {

    var key = pathArr.shift();
    if (key !== undefined) {
      if (pathArr.length > 1) {
        //Create object value if one does not yet exist
        if (obj[key] == null || typeof obj[key] !== 'object') {
          obj[key] = {};
        }
        this.setObjDeepValue(obj[key], value, pathArr);
      } else {
        //Set the value
        obj[key] = value;
      }
    }

  }
}