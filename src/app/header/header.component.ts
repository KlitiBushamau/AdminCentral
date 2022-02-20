import { Component, OnInit } from '@angular/core';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFileAlt, faDonate, faExclamationTriangle, faCogs, faList, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faHome, faCircleDollarToSlot, faChartPie } from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  status: boolean = false;
  clickEvent(){
      this.status = !this.status; }
      
  faUser = faUser;
  faBell = faBell;
  faBars = faBars;
  faSearch = faSearch;
  faEnvelope = faEnvelope;
  faFileAlt = faFileAlt;
  faDonate = faDonate;
  faExclamationTriangle = faExclamationTriangle;
  faCogs = faCogs;
  faList = faList;
  faSignOutAlt = faSignOutAlt;

  faHome = faHome;
  faCircleDollarToSlot = faCircleDollarToSlot;
  faChartPie = faChartPie;


  constructor() { }

  ngOnInit(): void {
  }

}
