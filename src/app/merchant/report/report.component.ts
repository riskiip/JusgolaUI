import {Component, OnInit} from '@angular/core';
import {ngxCsv} from 'ngx-csv/ngx-csv';
import {ProductService} from "../../customer/product/product.service";
import {take} from "rxjs";
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {
  displayedColumns: string[] = ['title', 'price', 'sold', 'quantity'];
  dataSources: any;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.inquiryProduct();
  }

  inquiryProduct() {
    this.productService.inquiryProductByUserAndMinistry(localStorage.getItem('userId'))
      .pipe(take(1))
      .subscribe((res) => {
        if (res) {
          this.dataSources = res;
        }
      })
  }

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

  downloadPdf() {
    const doc = new jsPDF('p', 'pt', [595,842]);
    const text= 'Monthly Report of merchant';
    doc.setFontSize(18);
    var xOffset = (doc.internal.pageSize.width / 2) - (doc.getStringUnitWidth(text) * 18 / 2);
    doc.text(text, xOffset, 32)

    autoTable(doc, { html: '#my-table' , startY: 50})
    doc.save('Monthly_Report.pdf')
  }
}
