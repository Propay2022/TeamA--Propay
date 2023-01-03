import { Component } from '@angular/core';
import { BroadBand } from '../model/Broadband';
import { BroadbandService } from '../services/broadband.service';

@Component({
  selector: 'app-broadband-history',
  templateUrl: './broadband-history.component.html',
  styleUrls: ['./broadband-history.component.css']
})
export class BroadbandHistoryComponent {
  broadbandArr!:BroadBand[];

  constructor(private service: BroadbandService){}
  
  ngOnInit(): void {
    this.broadbandArr = this.service.broadbandHistory();
  }
}
