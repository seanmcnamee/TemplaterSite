import { ReplacementItem } from "src/app/components/replacement-item/replacement-item.component";

export abstract class IFormatterService {
  constructor() { }
  public abstract format(template: string, map: Map<string, string>): string;
  public abstract GetMap(items: ReplacementItem[]): Map<string, string>;
}
