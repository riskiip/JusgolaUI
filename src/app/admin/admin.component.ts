import { Component, OnInit } from '@angular/core';
import {APPROVAL_DATA} from "../model/admin.approval.model";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  displayedColumns: string[] = ['position', 'merchantname', 'status', 'action'];
  dataSource = APPROVAL_DATA;

  constructor() { }

  ngOnInit(): void {
  }

  approveStatus(rowData: any) {
    rowData.status = 'Approved';
  }

  rejectStatus(rowData: any) {
    rowData.status = 'Rejected';
  }

}