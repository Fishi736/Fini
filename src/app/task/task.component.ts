import { Component, OnInit } from '@angular/core';
import { AngthemeService } from '../angtheme.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styles: []
})
export class TaskComponent implements OnInit {
    tdata: any = [];
  
    constructor(private q: AngthemeService, private toastr: ToastrService) {
        let item = JSON.parse(localStorage.getItem("udata"));
        for (let obj of item) {
            for (let key in obj) {
              
            }
        }
        this.ngOnInit();
    }

    ngOnInit() {

        this.q.gettask().subscribe(k => {
            this.tdata = k['data'];
        });
    }
    Send(ta) {
        this.q.addtask(ta.value).subscribe(k => {
            this.ngOnInit();

        });

    }
    delete(_id) {
        this.q.deleteTask(_id).subscribe(k => {
            this.ngOnInit();
            this.toastr.error('Task Deleted', 'Deleted', { closeButton: true, progressBar: true, progressAnimation: 'decreasing' });
        });
    }


}
