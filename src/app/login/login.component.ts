import { Component, OnInit } from '@angular/core';
import { AngthemeService } from '../angtheme.service';
import { error } from 'util';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg: string;
  
  constructor(private q: AngthemeService, private toastr: ToastrService, private route: Router) { }

  ngOnInit() {
  }
  login(ld) {
    this.q.signin(ld.value).subscribe(k => {
      this.msg = k['msg'];
      if (this.msg == "") {
        this.toastr.error('Wrong Email Id or Password!', 'Error');
      } else {
        
        localStorage.setItem("udata",JSON.stringify(this.msg));
        this.route.navigate(['/dashboard']);
      }
    })
  }
}
