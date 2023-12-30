import { Injectable } from '@angular/core';
import jsPDF from "jspdf";

@Injectable({
  providedIn: 'root'
})
export class SummaryOrderPdfService {
  fileUri: any;

  constructor() { }

  generatePdf(data: any) {
    const doc = new jsPDF('p', 'pt', [595,842]);
    const pageHeight = doc.internal.pageSize.getHeight();
    const pageWidth = doc.internal.pageSize.getWidth();
    const firstSection = 48;
    const secondSection = 230;
    let startY = 32;
    const marginBottom = 70;

    function setTitle(text: string, x: number) {
      doc.setFontSize(18);
      doc.text(text, x, startY);
    }

    function setCenterTitle(text: string, x: number, y: number) {
      doc.setFontSize(18);
      var xOffset = (doc.internal.pageSize.width / 2) - (doc.getStringUnitWidth(text) * 18 / 2);
      doc.text(text, xOffset, y)
    }

    function addSpace(heightItemBefore: number, spaceAfter: number) {
      const heightItem = heightItemBefore + spaceAfter + 4;
      startY += heightItem;
      checkHeight(startY);
    }

    function checkHeight(y: number) {
      if (y >= pageHeight - marginBottom) {
        doc.addPage();
        startY = startY * 4.85;
      }
    }

    setCenterTitle('Invoice', firstSection, startY);
    addSpace(8, 8);

    addSpace(8, 0);
    setTitle('Product Name', firstSection);
    setTitle(data.title, secondSection);
    addSpace(8, 0);

    addSpace(8, 0);
    setTitle('Product Description', firstSection);
    setTitle(data.description, secondSection);
    addSpace(8, 0);

    addSpace(8, 0);
    setTitle('Price', firstSection);
    setTitle('IDR ' + data.price, secondSection);
    addSpace(8, 0);

    this.fileUri = doc.output('datauristring', {filename: 'Invoice_Jusgola.pdf'});
    const linkSource = this.fileUri;
    const downloadLink = document.createElement("a");
    downloadLink.href = linkSource;
    downloadLink.download = 'Invoice_Jusgola.pdf';
    downloadLink.click();
  }

}
