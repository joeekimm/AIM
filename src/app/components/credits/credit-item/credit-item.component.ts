import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-credit-item',
  templateUrl: './credit-item.component.html',
  styleUrls: ['./credit-item.component.sass']
})
export class CreditItemComponent implements OnInit {
  properties;

  @Input() set picture(picture: any) {
    this.properties = picture;
  }

  constructor() { }

  ngOnInit() {
  };
  
}
