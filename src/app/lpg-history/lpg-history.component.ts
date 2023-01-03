import { Component } from '@angular/core';
import { Lpg } from '../model/Lpg';
import { LpgService } from '../services/lpg.service';

@Component({
  selector: 'app-lpg-history',
  templateUrl: './lpg-history.component.html',
  styleUrls: ['./lpg-history.component.css']
})
export class LpgHistoryComponent {
  lpgArr: Lpg[];
  constructor(private service: LpgService) { 
    this.lpgArr = this.service.LpgHistory();
    
  }
  ngOnInit(): void {
  }
}
