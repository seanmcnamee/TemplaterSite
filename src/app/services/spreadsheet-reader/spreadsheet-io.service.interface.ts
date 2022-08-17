export abstract class ISpreadsheetIOService {
  public abstract GetJsonArrays(file: File): Promise<unknown[]>;
  public abstract SaveJsonToSheet(json: any[], fileName : string | null): Promise<true>;
}