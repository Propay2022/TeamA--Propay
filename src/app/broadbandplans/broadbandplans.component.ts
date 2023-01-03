import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BroadBand } from '../model/Broadband';
import { BroadbandService } from '../services/broadband.service';

// const MOBILE=sessionStorage.getItem('hmob');
// const OPERATOR=sessionStorage.getItem('hope');

@Component({
  selector: 'app-broadbandplans',
  templateUrl: './broadbandplans.component.html',
  styleUrls: ['./broadbandplans.component.css']
})
export class BroadbandplansComponent implements OnInit {
  msg:string="";
  public objBroadband : BroadBand;
  
  ope = sessionStorage.getItem('ope');
  mob = sessionStorage.getItem('mob');


  constructor(private service: BroadbandService , private router:Router, private act:ActivatedRoute ){
    this.objBroadband = new BroadBand();

  }

  insertBroadband(data:any){
    this.act.params.subscribe(params=>{this.objBroadband.mobile_No=params['mob'],
    this.objBroadband.operator=params['ope']})
    this.objBroadband.bbplans = data.bbplans;
    console.log(this.objBroadband.operator);
    console.log(this.objBroadband.mobile_No);
    console.log(this.objBroadband.bbplans);

    this.msg = this.service.insertBroadband(this.objBroadband);
    this.router.navigate(['/payment']);


    console.log("s " +this.ope);
    console.log("s " +this.mob);
  
    sessionStorage.setItem('plans', this.objBroadband.bbplans);
    if (this.ope)
    sessionStorage.setItem('ope', this.ope);
    // console.log(this.ope)
    if(this.mob)
    sessionStorage.setItem('mob', this.mob)
  }
  ngOnInit(): void {
  }
}
