import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-influencer-module',
  templateUrl: './influencer-module.component.html',
  styleUrls: ['./influencer-module.component.scss']
})
export class InfluencerModuleComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
    // console.log('tttt',this.router.events)
  }

  Openeditshop(strtype: string) {

  }

  logOut(){   
    localStorage.removeItem('VendorSession');
    localStorage.clear();
    this.router.navigate(['/']);
  }

  onClickSidemenuRefresh(URL: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([URL]));
  }

  onclickSupport(strtype: string) {
    localStorage.setItem("supportlink", strtype);
    this.onClickSidemenuRefresh('/star/faq')
  }
}
