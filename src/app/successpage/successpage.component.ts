import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-successpage',
  templateUrl: './successpage.component.html',
  styleUrls: ['./successpage.component.css']
})
export class SuccesspageComponent {

  ope=sessionStorage.getItem('ope');
  mob=sessionStorage.getItem('mob');
  plans=sessionStorage.getItem('plans');

  constructor(private route:Router){}
  ngOnInit(): void {
    console.log(this.ope);
    console.log(this.mob);
    console.log(this.plans);

  }
  next(){
    if(this.mob)
    sessionStorage.setItem('mob', this.mob);
    if(this.ope)
    sessionStorage.setItem('ope', this.ope);
    if(this.plans)
    sessionStorage.setItem('plans',this.plans);

    this.route.navigate(['/billpaymentpage']);
  }
}

