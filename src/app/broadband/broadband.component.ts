import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-broadband',
  templateUrl: './broadband.component.html',
  styleUrls: ['./broadband.component.css']
})
export class BroadbandComponent {
public mob!:string
public ope!:string
constructor(private route:Router){}

proceed(){
  console.log('1'+this.mob);
  console.log('1'+this.ope);
  sessionStorage.setItem('mob',this.mob);
  sessionStorage.setItem('ope',this.ope)

  this.route.navigateByUrl(`broadbandplans/${this.mob}/${this.ope}`);
}
}
