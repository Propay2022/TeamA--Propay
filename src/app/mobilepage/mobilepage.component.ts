import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobilepage',
  templateUrl: './mobilepage.component.html',
  styleUrls: ['./mobilepage.component.css']
})
export class MobilepageComponent {
  public mob!:string
  public ope!:string
  constructor(private route:Router){}
  
  proceed(){
    console.log('1'+this.mob);
    console.log('1'+this.ope);
    sessionStorage.setItem('mob',this.mob);
    sessionStorage.setItem('ope',this.ope);
    this.route.navigateByUrl(`planshome/${this.mob}/${this.ope}`);

  }
}
