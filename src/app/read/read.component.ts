import { Component, OnInit } from '@angular/core';
import { AngthemeService } from '../angtheme.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styles: []
})
export class ReadComponent implements OnInit {
  id: string;
  mail: any = [];
  constructor(private q: AngthemeService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.q.readMail(this.id).subscribe(k => {
      this.mail = k['mail'];
    });
  }

}
