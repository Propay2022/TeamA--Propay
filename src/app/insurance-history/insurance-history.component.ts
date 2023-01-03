import { Component, OnInit } from '@angular/core';
import { Insurance } from '../model/Insurance';
import { InsuranceService } from '../services/insurance.service';

@Component({
  selector: 'app-insurance-history',
  templateUrl: './insurance-history.component.html',
  styleUrls: ['./insurance-history.component.css']
})
export class InsuranceHistoryComponent implements OnInit {
insuranceArr!:Insurance[];

constructor(private service:InsuranceService){

}
ngOnInit(): void {
  this.insuranceArr = this.service.InsuranceHistory();
}
}
