import { Component, OnInit } from '@angular/core';
import { AngthemeService } from '../angtheme.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  constructor(private q: AngthemeService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  send(cc) {
    console.log(cc.value)
    this.q.signup(cc.value).subscribe(k => {
      this.toastr.success('Registration Successfull', 'Success');
    });
  }



}