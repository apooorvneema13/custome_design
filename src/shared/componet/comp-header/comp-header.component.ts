import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Constants } from '../../helper';
import { Abstract, Severity, Title, UserType } from '../../helper/abstract';
import { companyinfo, LoginResponse } from '../../model/fake/fakeDataModel';
import { UserService } from '../../services/user/user.service';


@Component({
  selector: 'comp-header',
  templateUrl: './comp-header.component.html',
  styleUrls: ['./comp-header.component.scss']
})
export class CompHeaderComponent implements OnInit {

  @Input() listToggle: boolean = false;
  islandingpage: boolean = false;

  @Input()bgTransperant:boolean = false;

  @Output() oncmplistmapview = new EventEmitter<any>();
  sessionUser: LoginResponse = new LoginResponse();
  userPopup_active: boolean = false;
  
  constructor(private router: Router, private userservice: UserService
    , private messageService: MessageService) 
    {
    
    this.sessionUser = Abstract.getLoggedInUser();

    if(this.router.url.includes('/company/profile/'))
    {
      this.islandingpage=true;
    }
    else
    {
      this.islandingpage=false;
    }
    console.log(this.router.url);

  }

  ngOnInit(): void {
   
  }



  LogOut() {
    alert();
    this.RemoveLoggedInUser();
  }
  RemoveLoggedInUser() {
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
  }


  showToast(severity: any, title: any, toastMessagae: any) {
    this.messageService.add({ severity: severity, summary: title, detail: toastMessagae, life: Constants.TOAST_LIFE });
  }

  clearToast() {
    this.messageService.clear();
  }
  OpenBlog()
  {
    this.router.navigateByUrl(`/blogs`,);
  }
  gotodashboard() {
    this.userPopup_active = false;
    //this.router.navigateByUrl('/company');
    if(this.sessionUser.UserTypeID==undefined)
    {
      this.router.navigateByUrl(`/`);
    }
    if (this.sessionUser.UserTypeID == UserType.Employer) {
      if (this.sessionUser.UserID != undefined) {
        let id = Abstract.URLstart + this.sessionUser.UserID;
        this.router.navigateByUrl(`/company/profile/${id}`,);
      }
    }
    else {
      if (this.sessionUser.UserID != undefined) {
        let id = Abstract.URLstart + this.sessionUser.UserID;
        this.router.navigateByUrl(`/candidate/profile/${id}`,);
      }
    }
  }
  gotodashboard1()
   {
    this.router.navigateByUrl(`/`);
  }

  jobSrch() {
    this.userPopup_active = false;
    this.router.navigateByUrl(`/candidate/job-search`);
  }

  jobPost() {
    this.userPopup_active = false;
    this.router.navigateByUrl(`/company/job-posting`)
  }

  isuseprofileActive: boolean = false;
  onprofile() {
    this.isuseprofileActive = true
  }
  onprofileclose() {
    //this.userPopup_toggle();
    this.userPopup_active = false;
    this.isuseprofileActive = false
  }

  userPopup_toggle() {
    this.userPopup_active = !this.userPopup_active;
  }
  onclickcmplistmapview()
  {
    this.listToggle=!this.listToggle;
    this.oncmplistmapview.emit(this.listToggle);    
  }

  objcompanyinfo:companyinfo=new companyinfo();
  CountryCode:string=Abstract.CountryCode;
  isCompanyprofileActive:boolean=false;
  oncompanyprofile()
  {
    this.isCompanyprofileActive=true;
    if(this.sessionUser.UserID)
    {
    this.userservice.GetOrganizationUserProfile(this.sessionUser.UserID).toPromise().then((response) => {
      if (response.statuscode == 200) {
        if (response.data.length > 0) 
        {
          this.objcompanyinfo=response.data[0];
        }

      }
     
    },
      (error) => {

        console.log("Get Organization User Profile" + JSON.stringify(error));
      });
    }
  }
  onCompanyprofileclose()
  {
    this.isCompanyprofileActive=false;
  }
  signinClick:boolean=false;
  opencandidatelogin()
  {
    this.signinClick=false;
    this.islandingpage=false;
    this.router.navigateByUrl('/login-candidate');
    //window.location.replace("https://devserver.mitajacorp.com/talenthook/login-candidate");
  }

  openCompanylogin()
  {
    this.signinClick=false;
    this.islandingpage=false;
    this.router.navigateByUrl('/login-company');
    //window.location.replace("https://devserver.mitajacorp.com/talenthook/login-company");
    
  }

}

