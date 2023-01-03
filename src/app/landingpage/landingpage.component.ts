import { Component } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent {
  isDark: any;
 

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
}
