import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditCard } from '../model/CreditCard';
import { CreditcardService } from '../services/creditcard.service';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css']
})
export class CreditcardComponent implements OnInit{
  msg:string="";
  public objCredit : CreditCard;
  bill!:string;
  no!:string;
  plans!:string;

  constructor(private service: CreditcardService, private router:Router){
    this.objCredit = new CreditCard();
  }

  insertCredit(data:any){
    this.objCredit.biller = data.biller;
    this.objCredit.number = data.number;
    this.objCredit.amount = data.amount;

    this.msg = this.service.creditInsert(this.objCredit);
    this.router.navigate(['/payment']);

    console.log(this.no);
    console.log(this.bill);
    console.log(this.plans);
    sessionStorage.setItem('mob',this.no);
    sessionStorage.setItem('ope',this.bill);
    sessionStorage.setItem('plans', this.plans)
  }
  ngOnInit(): void {
  }
}
