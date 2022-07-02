import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'edit-shop',
  templateUrl: './edit-shop.component.html',
  styleUrls: ['./edit-shop.component.scss']
})
export class EditShopComponent implements OnInit {
  Bumiketypechk1: boolean = false;
  Bumiketypechk2: boolean = false;
  SelectAll: boolean = false;

  constructor() { }
  ngOnInit(): void {
  }
  onselectbumitype(strtype: string) {
    if (strtype == "Yes") {
      this.Bumiketypechk2 = false;
    }
    else if (strtype == "No") {
      this.Bumiketypechk1 = false;
    }
  }
}
