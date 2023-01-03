import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dth } from '../model/Dth';
import { DthService } from '../services/dth.service';

// const MOBILE=sessionStorage.getItem('hmob');
// const OPERATOR=sessionStorage.getItem('hope');

@Component({
  selector: 'app-dth',
  templateUrl: './dth.component.html',
  styleUrls: ['./dth.component.css']
})
export class DTHComponent {
  msg:string="";
  public objDth : Dth;
  
  ope = sessionStorage.getItem('ope');
  mob = sessionStorage.getItem('mob');


  constructor(private service: DthService , private router:Router, private act:ActivatedRoute ){
    this.objDth = new Dth();

  }

  insertDth(data:any){
    this.act.params.subscribe(params=>{this.objDth.mobile_No=params['mob'],
    this.objDth.operator=params['ope']})
    this.objDth.bbplans = data.bbplans;
    console.log(this.objDth.operator);
    console.log(this.objDth.mobile_No);
    console.log(this.objDth.bbplans);

    this.msg = this.service.insertDth(this.objDth);
    this.router.navigate(['/payment']);

    console.log("s " +this.ope);
    console.log("s " +this.mob);
  
    sessionStorage.setItem('plans', this.objDth.bbplans);
    if (this.ope)
    sessionStorage.setItem('ope', this.ope);
    // console.log(this.ope)
    if(this.mob)
    sessionStorage.setItem('mob', this.mob)

  }
  ngOnInit(): void {
  }
}
