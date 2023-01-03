import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  ope=sessionStorage.getItem('ope');
  mob=sessionStorage.getItem('mob');
  plans=sessionStorage.getItem('plans');

  ope1!:any;
  bbplans1!:any;
  mob1!:any;
  constructor(private route:Router){
    this.ope1 = this.ope;
    this.mob1 = this.mob;
    this.bbplans1 = this.plans;
  }

success() {
  sessionStorage.setItem('plans', this.bbplans1);
  sessionStorage.setItem('ope', this.ope1);
  sessionStorage.setItem('mob', this.mob1);
  this.route.navigate(['/successpage'])
}
}
