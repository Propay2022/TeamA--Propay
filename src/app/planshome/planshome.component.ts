import { Component } from '@angular/core';
import { Mobile } from '../model/Mobile';
import { ActivatedRoute, Router } from '@angular/router';
import { MobileService } from '../services/mobile.service';


@Component({
  selector: 'app-planshome',
  templateUrl: './planshome.component.html',
  styleUrls: ['./planshome.component.css']
})
export class PlanshomeComponent {
  msg:string="";
  ope=sessionStorage.getItem('ope');
  mob=sessionStorage.getItem('mob');
  public objMobile : Mobile;

  constructor(private service:MobileService, private router:Router, private act:ActivatedRoute){
    this.objMobile = new Mobile();
  }
  insertMobile(data:any){
      this.act.params.subscribe(params=>{this.objMobile.mobile_No=params['mob'],
      this.objMobile.operator=params['ope']})
      this.objMobile.mbplans = data.mbplans;
      console.log(this.objMobile.operator);
      console.log(this.objMobile.mobile_No);
      console.log(this.objMobile.mbplans);
  
      this.msg = this.service.insertMobile(this.objMobile);
      this.router.navigate(['/payment']);
    
      console.log("s " +this.objMobile.mbplans);
      console.log("s " +this.ope);
      console.log("s " +this.mob);
    
      sessionStorage.setItem('plans', this.objMobile.mbplans);
      if (this.ope)
      sessionStorage.setItem('ope', this.ope);
      if(this.mob)
      sessionStorage.setItem('mob', this.mob)
  }
}
