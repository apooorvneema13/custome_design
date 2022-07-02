import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-module',
  templateUrl: './vendor-module.component.html',
  styleUrls: ['./vendor-module.component.scss']
})
export class VendorModuleComponent implements OnInit {
   username:any;

  constructor(public router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('username'))
    {

      //var username=localStorage.getItem('username');
      this.username= localStorage.getItem('username');  
    }else
    {
      this.username='';
    }
  }

  Openeditshop(strtype: string) {
  }

  onClickSidemenuRefresh(URL: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([URL]));
  }

  onclickSupport(strtype: string) {
    localStorage.setItem("supportlink", strtype);
    this.onClickSidemenuRefresh('/vendor/faq')
  }






LogOut() {
  localStorage.clear();
  this.router.navigate(['']);
    //alert();
    //this.RemoveLoggedInUser();
  }
/*  RemoveLoggedInUser() {
    let data = { "ID": this.sessionUser.UserID }
    alert(data);
    if (this.sessionUser.Token != undefined) {
      this.userservice.UpdateLastLogin(data).toPromise().then((response) => {
        if (response.statuscode == 200) {
          if (response != null && response.data != null && response.data[0] === 1) {
            // if(confirm("Are you sure to logout")) 
            // {
            if (this.sessionUser.UserTypeID == UserType.Employer) {
              localStorage.removeItem(Abstract.Logged_User);
              this.router.navigateByUrl('/login-company');
            }
            else if (this.sessionUser.UserTypeID == UserType.JobSeeker) {
              localStorage.removeItem(Abstract.Logged_User);
              this.router.navigateByUrl('/login-candidate');
            }
            //    }
          }
          else {
            //  this.btnActiveloading = false;
            this.showToast(Severity.ERROR, Title.ERROR, response.message);
          }
        }
        else {
          //   this.btnActiveloading = false;
          this.showToast(Severity.ERROR, Title.ERROR, response.message);
        }

      },
        (error) => {
          //this.btnActiveloading = false;
          console.log("Update Last Login:" + JSON.stringify(error));
        });
    }
    else {
      if (this.sessionUser.UserTypeID == UserType.Employer) {
        localStorage.removeItem(Abstract.Logged_User);
        this.router.navigateByUrl('/login-company');
      }
      else if (this.sessionUser.UserTypeID == UserType.JobSeeker) {
        localStorage.removeItem(Abstract.Logged_User);
        this.router.navigateByUrl('/login-candidate');
      }

    }
  }*/



}
