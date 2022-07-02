import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comp-footer',
  templateUrl: './comp-footer.component.html',
  styleUrls: ['./comp-footer.component.scss']
})
export class CompFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  privacy_active : boolean = false;
  privacy_popup() {
    this.privacy_active = !this.privacy_active;
  }

  Termandcondition_active : boolean = false;
  Termandcondition_popup() {
    this.Termandcondition_active = !this.Termandcondition_active;
  }

}
