import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute,Params  } from '@angular/router'
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import * as bootstrap from "bootstrap";
// import * as $ from "jquery";
declare var $: any;
@Component({
  selector: 'app-order-review',
  templateUrl: './order-review.component.html',
  styleUrls: ['./order-review.component.scss']
})
export class OrderReviewComponent implements OnInit {
  @ViewChild('paypalRef', {static:true}) private paypalRef :ElementRef;


  getCartList: any;
  total: any;
  url:"http://139.59.21.147:8080";
  products:any=[];
  pay_type: any;
  pay_method: any;
  pay_img: any;
  orderPaypal: any=false;
  deliver_fees: any;
  vat_amt: any=0;
  final_amt: any=0;;

  constructor(private http:HttpClient, private route:ActivatedRoute) {

    this.route.queryParams.subscribe((param:any) => {
     
      const r = JSON.parse(param.products);
   // console.log("pay_method",r.pay_method);
    console.log("pay_type",r.pay_type);

      this.pay_type=r.pay_type;
      this.pay_method=r.pay_method;
      this.pay_img=r.pay_img;
    
      
    })



   }

  ngOnInit(): void {
    this.getMyCartList();
    this. getpaypal();


  }



  // remove card item
  removeItem(products:any)
  {



    // let text = "Press a button!\nEither OK or Cancel.";
    // if (confirm(text) == true) {
    //    text = true;
    // } else {
    //     text = false;
    // }


    var result = confirm("Want to delete?");
    if(result){


    console.log("in",products.cart_id);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };

    let body = 
      {
        cart_id:products.cart_id
      }   

    this.http
      .post("http://139.59.21.147:8080/api/customer/remove_cart", body,options)
      .subscribe((response: any) => {
        alert(response.message);
        this.getMyCartList();
        if (response.statuscode == '404') {

          alert(response.message);
        }
        else if (response.statuscode == '200') {
          console.log("innnnn");
          alert(response.message);
          // this.getMyCartList();
        }
       
      });
    }
  }

  getMyCartList()
  {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      let options = { headers: headers };

      let body = {
        "user_id":localStorage.getItem('cust_id')
        // "user_id":"1"
      }
      console.log(body);
  
      this.http
        .post("http://139.59.21.147:8080/api/customer/my_cart", body,options)
        .subscribe((response: any) => {
          if (response.statuscode == '404') {
  
            alert(response.message);
          }
          else if (response.statuscode == '200') {
            console.log(response.data);
            this.getCartList=response.data.carts;
            this.total=response.data.total;
            console.log(this.getCartList);
            console.log(this.total);
          }

          for(var i=0;i<this.getCartList.length;i++)
          {
            this.products.push(this.getCartList[i].id);
          }
          console.log(this.products);
        });
  }



 Orderpaypaback()
  {
   

if(this.pay_type=='pay_in_advance')
{

  this.placeOrderlive();
  

}
if(this.pay_type=='pay_in_door')
{


  this.placeOrderCod();
}

  }

  placeOrderlive()
  {

  
   if($('.paypsalwore').css('display') == 'none')
   {


    $(".paypsalwore").css("display", "block");
   }
  //  else{
  
  //   $(".paypsalwore").css("display", "none");

  //  }

    // if(this.pay_type=='pay_in_advance'){

  
    // }
  }

  placeOrderlive_succes_payment(){
     // this.final_amt=  this.total + 0 + 0;
     let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };

    let body = {
      "order_id": "",
      "sub_total": this.total,
      "vat_charge": this.vat_amt,
      "delivery_fees": this.deliver_fees,
      "product_id":this.products,
      "total_amount": this.total +0 +0,
      "customer_id": localStorage.getItem('cust_id'),
      "address_details_id": localStorage.getItem('address_id'),
      "coupon_code": "",
      "payment_type": "paypal",
      "payment_status": localStorage.getItem('trans_status'),
      "payment_id": localStorage.getItem('trans_id'),
      "order_date":new Date()
    }
    console.log(body);

    this.http
      .post("http://139.59.21.147:8080/api/customer/checkout", body,options)
      .subscribe((response: any) => {
        if (response.statuscode == '404') {
          alert(response.message);
        }
        else if (response.statuscode == '200') {
        //  alert(response.message);
        $('#order').modal('show'); 
        }
      });

  }


  getpaypal(){
  
    
    // console.log("1234",window.paypal)
    window.paypal.Buttons({ 
     
      // Sets up the transaction when a payment button is clicked
      createOrder: (data:any, actions:any) => {
        // alert(1)
        // alert(actions)
      
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: this.total // Can also reference a variable or function
            },currency_code:'IND'
          }]
        });
      },
      // Finalize the transaction after payer approval
      onApprove: (data:any, actions:any) => {
        this.placeOrderlive_succes_payment()
        return actions.order.capture().then(function(orderData:any) {
          // Successful capture! For dev/demo purposes:
          console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
          const transaction = orderData.purchase_units[0].payments.captures[0];
          let trans_status = localStorage.setItem('trans_status',transaction.status);
          let trans_id = localStorage.setItem('trans_id',transaction.id);
          // alert(`Transaction ${transaction.status}: ${transaction.id}\n\nSee console for all available details`);
         
         
          // When ready to go live, remove the alert and show a success message within this page. For example:
          // const element = document.getElementById('paypal-button-container');
          // element.innerHTML = '<h3>Thank you for your payment!</h3>';
          // Or go to another URL:  actions.redirect('thank_you.html');
        });
        
      }
    }).render(this.paypalRef.nativeElement);
    }


//  getPaypalbutton(){
//   paypal.Buttons({
//     // Sets up the transaction when a payment button is clicked
//     createOrder: (data, actions) => {
//       return actions.order.create({
//         purchase_units: [{
//           amount: {
//             value: '77.44' // Can also reference a variable or function
//           }
//         }]
//       });
//     },
//     // Finalize the transaction after payer approval
//     onApprove: (data, actions) => {
//       return actions.order.capture().then(function(orderData) {
//         // Successful capture! For dev/demo purposes:
//         console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
//         const transaction = orderData.purchase_units[0].payments.captures[0];
//         let trans_status = localStorage.setItem('trans_status',transaction.status);
//         let trans_id = localStorage.setItem('trans_id',transaction.id);
//         alert(`Transaction ${transaction.status}: ${transaction.id}\n\nSee console for all available details`);
//         // When ready to go live, remove the alert and show a success message within this page. For example:
//         // const element = document.getElementById('paypal-button-container');
//         // element.innerHTML = '<h3>Thank you for your payment!</h3>';
//         // Or go to another URL:  actions.redirect('thank_you.html');
//       });
//     }
//   }).render('#paypal-button-container');
//  }

  placeOrderCod()
  {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };

    let body = {
      "order_id": "",
      "sub_total": this.total,
      "vat_charge": 0,
      "delivery_fees": 0,
      "product_id":this.products,
      "total_amount": this.total + 0 + 0,  
      "customer_id": localStorage.getItem('cust_id'),
      "address_details_id": localStorage.getItem('address_id'),
      "coupon_code": "",
      "payment_type": "paypal",
      "payment_status": '',
      "payment_id": '',
      "order_date":new Date()
    }
    console.log(body);

    this.http
      .post("http://139.59.21.147:8080/api/customer/checkout", body,options)
      .subscribe((response: any) => {
        if (response.statuscode == '404') {
          alert(response.message);
        }
        else if (response.statuscode == '200') {
        //  alert(response.message);
        $('#order').modal('show'); 
        }
      });
  }

}
