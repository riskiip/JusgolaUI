import { TestBed } from '@angular/core/testing';

import { SummaryOrderPdfService } from './summary-order-pdf.service';

describe('SummaryOrderPdfService', () => {
  let service: SummaryOrderPdfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SummaryOrderPdfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
