import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dthpage',
  templateUrl: './dthpage.component.html',
  styleUrls: ['./dthpage.component.css']
})
export class DthpageComponent {
  public mob!:string
  public ope!:string
  constructor(private route:Router){}
  
  proceed(){
    console.log('1'+this.mob);
    console.log('1'+this.ope);

    sessionStorage.setItem('mob',this.mob);
    sessionStorage.setItem('ope',this.ope)
    this.route.navigateByUrl(`dth/${this.mob}/${this.ope}`);

  }
}
