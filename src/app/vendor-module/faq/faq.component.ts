import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  isFaqHomeShow: boolean = true;
  isFaqBlogShow: boolean = false;
  isFaqQuestionsShow: boolean = false;
  isFaqQuestionsDetailsShow: boolean = false;
  isFaqChatShow: boolean = false;
  isFaqVendorTutorialsShow: boolean = false;

  ngOnInit(): void {
    if (localStorage.getItem("supportlink")) {
      if (localStorage.getItem("supportlink") == "Chat") {
        this.onClickChatBox();
      }
      if (localStorage.getItem("supportlink") == "faq") {
        this.onClickFaqBox();
      }
      localStorage.removeItem("supportlink");
    }

  }

  onClickFaqBox() {
    this.isFaqHomeShow = false;
    this.isFaqQuestionsShow = true;
  }

  onClickQuestionDetails() {
    this.isFaqQuestionsShow = false;
    this.isFaqQuestionsDetailsShow = true;
  }

  onClickBlogBox() {
    this.isFaqHomeShow = false;
    this.isFaqBlogShow = true;
  }

  onClickChatBox() {
    this.isFaqHomeShow = false;
    this.isFaqChatShow = true;
  }

  onClickVideoBox() {
    this.isFaqHomeShow = false;
    this.isFaqVendorTutorialsShow = true;
  }
}
