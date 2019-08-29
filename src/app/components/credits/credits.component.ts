import { Component, OnInit } from '@angular/core';

import { PicList } from '../../../assets/pic-list';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.sass']
})
export class CreditsComponent implements OnInit {
  pictures;

  constructor() { }

  ngOnInit() {
    this.pictures = PicList;
    console.log(this.pictures);
  }

}
