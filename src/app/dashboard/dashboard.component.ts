import { Component, OnInit } from '@angular/core';
import { AngthemeService } from '../angtheme.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {
  fn: string;
  ln: string;
  mail: string;
  pn: string;
  constructor(private q: AngthemeService, private toastr: ToastrService) {
    let item = JSON.parse(localStorage.getItem("udata"));
    for (let obj of item) {
      for (let key in obj) {
        this.fn = obj["Firstname"];
        this.ln = obj["Lastname"];
        this.mail = obj["Email"];
        this.pn = obj["Phonenumber"];
      }
    }
    this.ngOnInit();
  }

  ngOnInit() {

  }


}
