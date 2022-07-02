import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute,Params  } from '@angular/router'
import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
@Component({
  selector: 'app-beauty-home',
  templateUrl: './beauty-home.component.html',
  styleUrls: ['./beauty-home.component.scss']
})
export class BeautyHomeComponent implements OnInit {
  productId: any;
  token: any;
  getCategory: any;
  cat1: any;
  cat2: any;
  cat3: any;
  getBrands: any;
  getPrice: any;
  brand_name: string;
  range: string;
  getProducts: any;
  url= "http://139.59.21.147:8080";
  product_id: any;
  selectedIndex: any;
  selectedIndex1: any;
  selectedIndex2: any;
  type: string | null;
  gender: string | null;
  gen: string;
  category_id: string | null;
  category_param: Params;
  selectedIndex_rang: string;
  getCat1: any;
  arr: any;
  getCat2: any;
  eventDate:any=5;

 newArrany:any=[];
  cat2id: any;
  cat2Name: any;
  constructor(private router:Router,
    private http: HttpClient,
    private route:ActivatedRoute
    )
     { 
         this.route.queryParams.subscribe((param:any) => {
      
      const r = JSON.parse(param.products);
      let categort_name=r.cat2;
      let categort_id=r.id
      this.category_id = localStorage.getItem('category_id');     
      this.productId = categort_id 
      console.log("dataada",this.category_id);      
      this.getCategory1()
      
    })

    const thing: any | null = this.router.getCurrentNavigation();
    if (thing.extras.state) {
      // this.productId = (thing.extras.state?.user.id)?(thing.extras.state?.user.id):"623";
      this.productId = (thing.extras.state?.user.id);
      console.log(this.productId);
      // this.cat1 = thing.extras.state?.user.cat1;
      this.cat2 = thing.extras.state?.user.cat2;
      console.log(this.cat2);

     
      // this.cat3 = thing.extras.state?.user.cat3;
    }

    

    this.type=localStorage.getItem('type');
    console.log(this.productId);
  }

  ngOnInit(): void {

    // amit
    this.getCategory1()
  
 
    this.gender=localStorage.getItem('gender');
    if(this.gender == '2')
    {
      this.gen="KING";
    }
    else if(this.gender == '1')
    {
      this.gen="QUEEN";
    }
    
  }


  getCategory1()
  {
    
    $('#cover-spin').show(0)
    if(this.eventDate == '5')
    {
      // this.headerName="Beauty";
      localStorage.setItem('type',"Beauty");
    }
    else if(this.eventDate == '7' || this.eventDate == '4')
    {
      localStorage.setItem('type',"Fashions");
    }
    else if(this.eventDate == '3' || this.eventDate == '6')
    {
      localStorage.setItem('type',"Lifestyle");
    }
    else
    {

    }
    
      this.token = localStorage.getItem('token');
     
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      });
      let options = { headers: headers };

      let body = {
        "parent_id":this.eventDate
      }
    
  
      this.http
        .post("http://139.59.21.147:8080/api/category/get_category", body,options)
        .subscribe((response: any) => {
          if (response.statuscode == '404') {
            alert(response.message);
          }
          else if (response.statuscode == '200') {        
            this.getCat1=response.data;  
            console.log("testerer",this.getCat1);
            for(var i=0;i<this.getCat1.length;i++)
            {
              console.log("finding",this.getCat1[i].id)
              this.getCategory2(this.getCat1[i].id);
            }
            $('#cover-spin').hide(0)
          }
        });     
  }  


    getCategory2(event:any)
    {
   
      $('#cover-spin').show(0)
      //alert("nxt")
    //  this.arr.length = 0;
      //alert("nh67y")
     // let arr=[];
      this.token = localStorage.getItem('token');
     
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      });
      let options = { headers: headers };

        let body = {
          "parent_id":event
        }
        
        
    
        this.http
          .post("http://139.59.21.147:8080/api/category/get_category", body,options)
          .subscribe((response: any) => {
            
            
            console.log("get2resp",response);
            if (response.statuscode == '404') {
              console.log("get2fail");
            }
            else if (response.statuscode == '200') {
              this.getCat2 = response.data;      
              console.log("get2",this.getCat2);

              for(var j=0;j<this.getCat2.length;j++)
              {
                console.log("get3",this.getCat2[j]);
                  let PushData=this.getCat2[j];
                  this.newArrany.push(PushData);

                  console.log("this.arr",this.newArrany);
                
              }
              $('#cover-spin').hide(0)
              
              }               
            }
          );
    
    }









    goToBeauty(event:any)
    {
        this.cat2id=event.id;
        this.cat2Name=event.name;
        this.selectedIndex = event;   
        
        let products={
          id:this.cat2id,        
          cat2:this.cat2Name          
      }
     
      // let navigationExtras: NavigationExtras = {
      //   state: {
      //     user: customer
      //   }
      // };
      localStorage.setItem('category_id', this.cat2id)
      this.router.navigate(['/products'], {
        queryParams:{products:JSON.stringify(products)}
       });
    }







  // getProductDetails()
  // {
    
  //   this.token = localStorage.getItem('token');
  //   let headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'x-access-token': this.token
  //   });
  //   let options = { headers: headers };

  //   let body = {
  //     "parent_id":this.product_id?this.product_id:this.productId,
  //     "price": this.range,
  //     "brand": this.brand_name
  //   }
  //   console.log(body);

  //   this.http
  //     .post("http://139.59.21.147:8080/api/customer/data", body,options)
  //     .subscribe((response: any) => {
  //       if (response.statuscode == '404') {

  //         alert(response.message);
  //       }
  //       else if (response.statuscode == '200') {
  //         console.log(response.data);
  //         this.getProducts=response.data;
  //         this.range="";
  //         this.brand_name="";
  //       }
  //     });
  // }


}
