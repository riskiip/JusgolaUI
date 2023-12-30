import { Component, OnInit } from '@angular/core';
import { TRANSACTION } from '../../model/transaction.model';
import { ngxCsv } from 'ngx-csv/ngx-csv';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {
  displayedColumns: string[] = ['position', 'productname', 'total'];
  dataSources = TRANSACTION;

  constructor() {}

  ngOnInit(): void {}

  downloadCsv(): void {
    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: false,
      title: 'Your CSV Title',
      useBom: true,
      noDownload: false,
      headers: this.displayedColumns,
    };
    new ngxCsv(this.dataSources, "report", options)
  }
}