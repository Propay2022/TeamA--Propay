import { Component } from '@angular/core';
import { Fasttag } from '../model/Fasttag';
import { FasttagService } from '../services/fasttag.service';

@Component({
  selector: 'app-fasttag-history',
  templateUrl: './fasttag-history.component.html',
  styleUrls: ['./fasttag-history.component.css']
})
export class FasttagHistoryComponent {
  fasttagArr: Fasttag[];
  constructor(private service: FasttagService) { 
    this.fasttagArr = this.service.fasttagHistory();
    
  }
  ngOnInit(): void {
  }
}
