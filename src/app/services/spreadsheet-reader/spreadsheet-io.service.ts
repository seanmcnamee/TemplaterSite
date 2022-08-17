import { Injectable } from '@angular/core';
import { ISpreadsheetIOService } from './spreadsheet-io.service.interface';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class SpreadsheetIOService implements ISpreadsheetIOService {

  constructor() { }

  /** Extract each row of a spreadsheet into an object of an array. Each column header is the name of each property for each row */
  public GetJsonArrays(file: File): Promise<unknown[]> {
    return new Promise<unknown[]>((resolve, reject) => {
      if (!file) {
        reject("No file was provided");
      }

      const reader: FileReader = new FileReader();
      reader.readAsBinaryString(file);
      reader.onload = (e: any) => {
        /* create workbook */
        const binarystr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(binarystr, { type: 'binary' });

        /* selected the first sheet */
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];

        /* save data */
        const data = XLSX.utils.sheet_to_json(ws); // to get 2d array pass 2nd parameter as object {header: 1}
        resolve(data);
      };
      reader.onerror = (e: any) => reject("Error occurred while reading file");
    });
  }

  public SaveJsonToSheet(json: any[], fileName: string | null): Promise<true> {
    return new Promise<true>((resolve, reject) => {
      if (!fileName?.trim().length) {
        reject("No file name provided");
        return;
      }

      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
      const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      XLSX.writeFile(workbook, `${fileName}.xlsx`);      
      resolve(true);
    });
  }
}