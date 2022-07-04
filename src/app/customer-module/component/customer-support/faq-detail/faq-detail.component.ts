import { Component, ElementRef, OnInit ,HostListener } from '@angular/core';
let items = document.querySelectorAll(".accordion button");

@Component({
  selector: 'app-faq-detail',
  templateUrl: './faq-detail.component.html',
  styleUrls: ['./faq-detail.component.scss']
})
export class FaqDetailComponent implements OnInit {
  // getAttribute:any

  // constructor(public elm: ElementRef) { }
  // @HostListener('click') onClick() {
  //   this.elm.nativeElement.setAttribute('aria-expanded','true');

  //  }

  ngOnInit(): void {
  

    // this.toggleAccordion()

// items.forEach(item => item.addEventListener('click', this.toggleAccordion));
    
  }
  
   
  // @HostListener('click') customSearch(){
   
  //   const itemToggle = this.elm.nativeElement.getAttribute('aria-expanded');
  //   console.log("const itemToggle" ,itemToggle)
  //   alert(1)
  //   for (let i = 0; i < items.length; i++) {
  //     items[i].setAttribute('aria-expanded', 'false');
  //   }
    
  //   if (itemToggle == 'false') {
  //     this.elm.nativeElement.setAttribute('aria-expanded', 'true');
  //   }
  
  //     }


      // customSearch(el){
      //   el.setAttribute('aria-expanded','true')
      //   console.log(el.setAttribute)
      // }


}
