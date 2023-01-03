import { Component } from '@angular/core';
import { Dth } from '../model/Dth';
import { DthService } from '../services/dth.service';

@Component({
  selector: 'app-dth-history',
  templateUrl: './dth-history.component.html',
  styleUrls: ['./dth-history.component.css']
})
export class DthHistoryComponent {
  dthArr!:Dth[];

  constructor(private service: DthService){}
  
  ngOnInit(): void {
    this.dthArr = this.service.dthHistory();
  }
}
