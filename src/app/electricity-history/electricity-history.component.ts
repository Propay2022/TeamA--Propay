import { Component } from '@angular/core';
import { Electricity } from '../model/Electricity';
import { ElectricityService } from '../services/electricity.service';

@Component({
  selector: 'app-electricity-history',
  templateUrl: './electricity-history.component.html',
  styleUrls: ['./electricity-history.component.css']
})
export class ElectricityHistoryComponent {
  elecArr: Electricity[];
  constructor(private service: ElectricityService) { 
    this.elecArr = this.service.electricityHistory();
    
  }
}
