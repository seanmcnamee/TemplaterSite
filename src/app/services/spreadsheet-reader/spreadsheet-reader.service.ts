import { Injectable } from '@angular/core';
import { ISpreadsheetReaderService } from './spreadsheet-reader.service.interface';
import * as XLSX from 'xlsx';
import { Subject, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpreadsheetReaderService implements ISpreadsheetReaderService {

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
        console.log(data); // Data will be logged in array format containing objects
        resolve(data);
      };
      reader.onerror = (e: any) => reject("Error occurred while reading file");
    });
  }
}