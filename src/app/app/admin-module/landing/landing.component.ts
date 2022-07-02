import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  isLoginContentShown: boolean = true;  
  isForgotPasswordShown: boolean = false;
  isResetPasswordShown: any = false;
  isOtpContentShown: boolean = false;
  isOtpVerified: boolean = false;
  isChangPasswordShown:boolean=false;
  
  constructor() { }
  ngOnInit(): void {
  }
  goToForgotPassword() {
    this.isLoginContentShown = false;
    this.isForgotPasswordShown = true;
  }
  goToResetPassword() {
    

    this.isForgotPasswordShown = false; 
    
    this.isOtpContentShown = true;
    this.isOtpVerified = false;
  
    
  }
  goToOtpVerification() {
    this.isLoginContentShown = false;
    this.isOtpContentShown = true;
  }

  onClickVerify() {
    this.isOtpContentShown = false;
    this.isOtpVerified = true;    
  }

  onClickResetPassword() {
    this.isResetPasswordShown = false;
    this.isOtpVerified = true;
  }
  onClickChangePassword(){
    this.isChangPasswordShown = false
  }


}
