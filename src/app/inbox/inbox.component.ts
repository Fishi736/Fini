import { Component, OnInit } from '@angular/core';

import { AngthemeService } from '../angtheme.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: []
})
export class InboxComponent implements OnInit {
  cdata: any = [];
  id: string;
  mail: string;
  constructor(private q: AngthemeService, private toastr: ToastrService, private route: Router) {
    let item = JSON.parse(localStorage.getItem("udata"));
    for (let obj of item) {
      for (let key in obj) {
        this.mail = obj["Email"];
      }
    }
    this.ngOnInit();
  }

  ngOnInit() {
    this.q.getinbox(this.mail).subscribe(k => {
      this.cdata = k['mail'];
     
    });
  }
  readmail(_id) {
    this.route.navigate(['/read/', _id])
  }
  delete(_id) {
    var q = confirm('Are You Sure To Delete?')
    if (q) {
      this.q.totrash(_id).subscribe(k => {
        this.ngOnInit();
        this.toastr.info('Added to trash', 'Deleted', { closeButton: true, progressBar: true, progressAnimation: 'decreasing' });
      });
    }
  }

}


