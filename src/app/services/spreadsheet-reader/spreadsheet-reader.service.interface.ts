export abstract class ISpreadsheetReaderService {
  public abstract GetJsonArrays(file: File): Promise<unknown[]>;
}