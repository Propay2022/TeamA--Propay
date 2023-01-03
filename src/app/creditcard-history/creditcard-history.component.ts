import { Component, OnInit } from '@angular/core';
import { CreditCard } from '../model/CreditCard';
import { CreditcardService } from '../services/creditcard.service';

@Component({
  selector: 'app-creditcard-history',
  templateUrl: './creditcard-history.component.html',
  styleUrls: ['./creditcard-history.component.css']
})
export class CreditcardHistoryComponent implements OnInit{
  creditArr!: CreditCard[];
  constructor(private service: CreditcardService) { 
  }
  ngOnInit(): void {
    this.creditArr = this.service.creditHistory();
  }
}
