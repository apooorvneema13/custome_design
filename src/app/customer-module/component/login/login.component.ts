import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { EmailValidator, FormBuilder,FormGroup,FormControl,Validators,FormControlName } from '@angular/forms';

import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import * as $ from "jquery";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  customOptions:OwlOptions
  loginForm:any= FormGroup;
  showLogin:boolean=true;

  constructor(
    private http: HttpClient, 
    private fb: FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.customOptions = {
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: true,
        navSpeed: 700,
        navText: ['<img src="../assets/images/leftArrow.png" width="20">', '<img src="../assets/images/rightArrow.png" width="20">'],
        responsive: {
          0: {
            items: 1
          }
        },
        nav: true
      }
    }, 300);
   
  }

  SlideOptions = {
    items: 10, autoplay: true, loop: true, dots: false,
    responsive: {
      0: {
        items: 1
      },
    
      600: {
        items: 3
      },
      960: {
        items: 5
      },
      1200: {
        items: 6
      },
      1300: {
        items: 10
      }
    },
    };

  slides = [
    {img: "../../../../assets/images/p1.png"},
    {img: "../../../../assets/images/p2.png"},
    {img: "../../../../assets/images/p3.png"},
    {img: "../../../../assets/images/p4.png"},
    {img: "../../../../assets/images/p5.png"},
    {img: "../../../../assets/images/p2.png"}
  ];
  slides_thim = [
    {img: "../../../../assets/images/7.png"},
    {img: "../../../../assets/images/6.png"},
    {img: "../../../../assets/images/8.png"},
    {img: "../../../../assets/images/9.png"},
    {img: "../../../../assets/images/4.png"},
    {img: "../../../../assets/images/5.png"},
    {img: "../../../../assets/images/8.png"},
    {img: "../../../../assets/images/p2.png"}
 
  ];
  slideConfig = {"slidesToShow": 5, "slidesToScroll": 5};
  isValidInput(email:any): boolean {
    
    return this.loginForm.controls[email].invalid &&
      (this.loginForm.controls[email].dirty || this.loginForm.controls[email].touched);
      
  }

  onLoginSubmit(){

  }

  king()
  {
     localStorage.setItem("gender",'2');
     $('.modal-backdrop').remove(); // used to remove fade screen
     this.router.navigate(['/dashboard']);
  }

  queen()
  {
    localStorage.setItem("gender",'1');
    $('.modal-backdrop').remove();  // used to remove fade screen
    this.router.navigate(['/dashboard']);
  }
}
