import { Component, OnInit } from '@angular/core';
import { faComment, faAngleRight, faList } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  faComment = faComment;
  faAngleRight = faAngleRight;
  faList = faList;

  constructor() { }

  ngOnInit(): void {
  }

}
