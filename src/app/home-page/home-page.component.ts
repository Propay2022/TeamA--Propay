import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  payment_flag:boolean;
  msg:string="";
  msg1:string="";
  msg2:string="";
  msg3:string="";
  msg4:string="";
  
  
  paymentArr: string[];
  payment_msg: string;
  contact_flag:boolean;
  feedback_flag:boolean;
  
    constructor(private router: Router) {
      this.payment_flag = false;
      this.paymentArr = ['Transaction failed', 'Transaction pending', 'Refund related'];
      this.payment_msg = "";
      this.contact_flag= false;
      this.feedback_flag = false;
  
     }


  toHome(){
    document.getElementById("home")?.scrollIntoView({behavior:"smooth"});
  }
  toAboutUs(){
    document.getElementById("aboutus")?.scrollIntoView({behavior:"smooth"});
  }
  toContactUs(){
    document.getElementById("contactus")?.scrollIntoView({behavior:"smooth"});
  }
  toFeedback(){
    document.getElementById("feedback")?.scrollIntoView({behavior:"smooth"});
  }
  signout(){
    alert("signed out successfully"),
    this.router.navigate(['/landing'])

  }





  selectPayment(a: string){
    this.payment_msg=a;
    this.msg2 = "Transaction failed";
    this.msg3= "Transaction pending";
    this.msg4= "Refund related";

  }

  payment(){
    this.payment_flag = !this.payment_flag;
    this.feedback_flag = false;
    this.contact_flag = false;
    this.msg1 = "payment related query";

  }

  
  contact(){
    this.contact_flag = !this.contact_flag;
    this.payment_flag = false;
    this.feedback_flag = false;
    this.msg1 = "contact our executive";
  }

  feedback(){
    this.feedback_flag = !this.feedback_flag;
    this.payment_flag = false;
    this.contact_flag = false;
    this.msg1 = "give us feedback"

  }
  feedback_msg5(){
    this.msg = "Thank you for your valuable feedback, we'll maintain the same"
  }

  feedback_msg4(){
    this.msg = "Thank you for your valuable feedback, hope to see you again"
  }
  feedback_msg3(){
    this.msg = "Thank you for your valuable feedback, we'll improve our negatives"
  }
  feedback_msg2(){
    this.msg = "Thank you for your valuable feedback, tell us how to improve"
  }
  feedback_msg1(){
    this.msg = "Thank you for your valuable feedback, sorry for the inconvenience."
  }


  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  ReadMore:boolean = true
  visible:boolean = false


  onclick()
  {
    this.ReadMore = !this.ReadMore; //not equal to condition
    this.visible = !this.visible
  }

}
