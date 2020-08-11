import { Component, OnInit } from '@angular/core';
import { AngthemeService } from '../angtheme.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {
  today: number = Date.now();

  constructor(private n: AngthemeService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  Send(ms) {
    console.log(ms.value)
    this.n.message(ms.value).subscribe(k => {
    this.toastr.success('Mail Sent!', 'Success');
    });
  }
}
