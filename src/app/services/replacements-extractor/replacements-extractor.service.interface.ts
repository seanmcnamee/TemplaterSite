import { ReplacementItem } from "src/app/components/replacement-item/replacement-item.component";

export abstract class IReplacementsExtractorService {
  constructor() { }
  public abstract GetItemsFromTemplate(template: string): ReplacementItem[];
  public abstract GetItemsFromJsonArray(jsonArray: any[]): ReplacementItem[];
  public abstract GetJsonArrayFromItems(items: ReplacementItem[]): object[];
}
