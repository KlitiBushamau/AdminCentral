import { Component, OnInit } from '@angular/core';
import { faComment, faAngleRight, faList, faShoppingCart, faLifeRing } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-dashboardcards',
  templateUrl: './dashboardcards.component.html',
  styleUrls: ['./dashboardcards.component.css']
})
export class DashboardcardsComponent implements OnInit {
  faComment = faComment;
  faAngleRight = faAngleRight;
  faList = faList;
  faShoppingCart = faShoppingCart;
  faLifeRing = faLifeRing;

  constructor() { }

  ngOnInit(): void {
  }

}
