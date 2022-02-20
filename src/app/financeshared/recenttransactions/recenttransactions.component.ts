import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recenttransactions',
  templateUrl: './recenttransactions.component.html',
  styleUrls: ['./recenttransactions.component.css']
})
export class RecenttransactionsComponent implements OnInit {

  dtOptions: any = {};
  
  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      responsive: true,
      select: true
      
    };
  }

}
