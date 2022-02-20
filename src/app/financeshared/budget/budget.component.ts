import { Component, OnInit } from '@angular/core';
import { faCreditCard, faAngleRight, faMoneyBill, faLightbulb } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
  faCreditCard = faCreditCard;
  faAngleRight = faAngleRight;
  faMoneyBill = faMoneyBill;
  faLightbulb = faLightbulb;
  


  constructor() { }

  ngOnInit(): void {
  }

}
