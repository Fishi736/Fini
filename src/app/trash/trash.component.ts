import { Component, OnInit } from '@angular/core';
import { AngthemeService } from '../angtheme.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styles: []
})
export class TrashComponent implements OnInit {

  cdata: any = [];
  id: string;


  constructor(private q: AngthemeService, private toastr: ToastrService) { }

  ngOnInit() {
    this.q.fromtrash().subscribe(k => {
      this.cdata = k['data'];
    });
  }

  delete(_id) {
    var q = confirm('Are You Sure To Delete?')
    if (q) {
      this.q.finalDelete(_id).subscribe(k => {
        this.ngOnInit();
        this.toastr.info('Added to trash', 'Deleted', { closeButton: true, progressBar: true, progressAnimation: 'decreasing' });
      });
    }
  }

}
