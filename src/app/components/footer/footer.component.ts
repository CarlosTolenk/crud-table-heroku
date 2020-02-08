import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public date;

  constructor() {

  }

  ngOnInit() {
    var d = new Date();
    this.date = d.getFullYear();
  }

}
