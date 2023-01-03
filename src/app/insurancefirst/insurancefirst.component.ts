import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Insurance } from '../model/Insurance';
import { InsuranceService } from '../services/insurance.service';

@Component({
  selector: 'app-insurancefirst',
  templateUrl: './insurancefirst.component.html',
  styleUrls: ['./insurancefirst.component.css']
})
export class InsurancefirstComponent implements OnInit {

  msg : string = "";
  public objInsurance : Insurance;

  constructor(private service : InsuranceService, private router: Router){
    this.objInsurance = new Insurance();
  }

  insuranceInsert(data: any){
    this.objInsurance.fname = data.fname;
    this.objInsurance.sname = data.sname
    this.objInsurance.address = data.address;
    this.objInsurance.email = data.email;
    this.objInsurance.age = data.age;
    this.objInsurance.dob = data.dob;
    this.objInsurance.bg = data.bg;
    this.objInsurance.mobile_No = data.mobile_No;
    this.objInsurance.occupation = data.occupation;
    this.objInsurance.aadhar = data.aadhar;
    this.objInsurance.pan = data.pan;



    this.msg = this.service.insertLpg(this.objInsurance);
    this.router.navigate(["/payment"]);
  }

  ngOnInit(): void {
  }
  
}
