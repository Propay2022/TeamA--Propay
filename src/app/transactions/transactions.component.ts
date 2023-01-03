import { Component, OnInit } from '@angular/core';
import { Fasttag } from '../model/Fasttag';
import { Lpg } from '../model/Lpg';
import { FasttagService } from '../services/fasttag.service';
import { LpgService } from '../services/lpg.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit{
  lpgArr: Lpg[];
  fasttagArr: Fasttag[];

  constructor(private service: LpgService, private service2:FasttagService) { 
    this.lpgArr = this.service.LpgHistory();
    this.fasttagArr = this.service2.fasttagHistory();

    
  }
  ngOnInit(): void {
    
  }

}
