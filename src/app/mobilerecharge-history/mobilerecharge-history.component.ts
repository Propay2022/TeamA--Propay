import { Component, OnInit } from '@angular/core';
import { Mobile } from '../model/Mobile';
import { MobileService } from '../services/mobile.service';

@Component({
  selector: 'app-mobilerecharge-history',
  templateUrl: './mobilerecharge-history.component.html',
  styleUrls: ['./mobilerecharge-history.component.css']
})
export class MobilerechargeHistoryComponent implements OnInit {
mobileArr!:Mobile[];

constructor(private service: MobileService){}

ngOnInit(): void {
  this.mobileArr = this.service.MobileHistory();
}
}

