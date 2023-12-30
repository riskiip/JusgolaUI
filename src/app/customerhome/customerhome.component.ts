import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-customerhome',
  templateUrl: './customerhome.component.html',
  styleUrls: ['./customerhome.component.scss']
})
export class CustomerhomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  redirectPage() {
    this.router.navigate(['/jusgola/customer']);
  }

}
