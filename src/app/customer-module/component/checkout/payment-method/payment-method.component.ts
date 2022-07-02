import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import { NavigationExtras, Router, RouterEvent } from '@angular/router';

@Component({selector: 'app-payment-method', templateUrl: './payment-method.component.html', styleUrls: ['./payment-method.component.scss']})
export class PaymentMethodComponent implements OnInit {
    getCartList : any;
    total : any;
    url : "http://139.59.21.147:8080";
    paypal : boolean = false;
  pay_type: any;
  pay_method: any;
    pay_img: string;

    constructor(private http : HttpClient
      ,public router: Router,) {}

    ngOnInit(): void {
        this.getMyCartList();
    }


    removeItem(products : any) {
        var result = confirm("Want to delete?");
        if (result) {
            let headers = new HttpHeaders({'Content-Type': 'application/json'});
            let options = {
                headers: headers
            };

            let body = {
                cart_id: products.cart_id
            }

            this.http.post("http://139.59.21.147:8080/api/customer/remove_cart", body, options).subscribe((response : any) => {
                alert(response.message);
                this.getMyCartList();
                if (response.statuscode == '404') {

                    alert(response.message);
                } else if (response.statuscode == '200') {
                    alert(response.message);

                }

            });
        }
    }


    OrderreviewData(){
   //[routerLink]="['/order-review/']"

    let products={
    pay_type: this.pay_type,        
    pay_img:this.pay_img,
    pay_method: this.pay_method          
}

console.log("terset",products);


   this.router.navigate(['/order-review'],
   {
    queryParams:{products:JSON.stringify(products)}
   })
    }


    getMyCartList() {
        let headers = new HttpHeaders({'Content-Type': 'application/json'});
        let options = {
            headers: headers
        };

        let body = {
            "user_id": localStorage.getItem('cust_id')
            // "user_id":"1"
        }
        console.log(body);

        this.http.post("http://139.59.21.147:8080/api/customer/my_cart", body, options).subscribe((response : any) => {
            if (response.statuscode == '404') {

                alert(response.message);
            } else if (response.statuscode == '200') {
                console.log(response.data);
                this.getCartList = response.data.carts;
                this.total = response.data.total;
                console.log(this.getCartList);
                console.log(this.total);
            }
        });
    }

    picupbox_advance(param:any) {

       console.log("paypal",param);
       this.pay_type=param;
       // $("#pickup_add").removeClass("active");
        $(this).addClass("active");
        $("#pickup_box_cont").show();
        $("#pickup_add_cont").hide();
        $('#pickup_box').css('border-color', 'red');
        $('#pickup_add').css('border-color','#ccc');
    }
    picupbox_door(param:any) {
     // console.log("picupbox_door",param);
      this.pay_type=param;
       // $("#pickup_box").removeClass("active");
        $(this).addClass("active");
        $("#pickup_box_cont").hide();
        $("#pickup_add_cont").show();
        $('#pickup_add').css('border-color', 'red');
        $('#pickup_box').css('border-color','#ccc');

    }

    activePaypal(event:any) {
        this.pay_img='card-paypal.png';
      this.pay_method=event;
        console.log("in", this.pay_method);
        this.paypal = !this.paypal;
    }

}