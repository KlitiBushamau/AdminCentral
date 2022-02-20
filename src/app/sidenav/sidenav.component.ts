import { Component, OnInit } from '@angular/core';
import { faHome, faCircleDollarToSlot, faChartPie, faUser } from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  status: boolean = false;
  clickEvent(){
      this.status = !this.status; }
  faHome = faHome;
  faCircleDollarToSlot = faCircleDollarToSlot;
  faChartPie = faChartPie;
  faUser = faUser;

  constructor() { }

  ngOnInit(): void {
  }

}
