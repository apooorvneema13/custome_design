import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-assets',
  templateUrl: './my-assets.component.html',
  styleUrls: ['./my-assets.component.scss']
})
export class MyAssetsComponent implements OnInit {
  product_info: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
