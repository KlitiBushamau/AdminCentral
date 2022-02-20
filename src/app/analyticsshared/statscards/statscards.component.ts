import { Component, OnInit } from '@angular/core';
import { faCreditCard, faAngleRight, faMoneyBill, faLightbulb } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-statscards',
  templateUrl: './statscards.component.html',
  styleUrls: ['./statscards.component.css']
})
export class StatscardsComponent implements OnInit {
  faCreditCard = faCreditCard;
  faAngleRight = faAngleRight;
  faMoneyBill = faMoneyBill;
  faLightbulb = faLightbulb;
  constructor() { }

  ngOnInit(): void {
  }

}
