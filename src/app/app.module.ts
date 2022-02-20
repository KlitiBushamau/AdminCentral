import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HttpClientModule } from '@angular/common/http';

import { DataTablesModule } from "angular-datatables";
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { PageviewsComponent } from './analyticsshared/pageviews/pageviews.component';
import { StatscardsComponent } from './analyticsshared/statscards/statscards.component';
import { VisitorsoverviewComponent } from './analyticsshared/visitorsoverview/visitorsoverview.component';
import { OverviewComponent } from './analyticsshared/overview/overview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BreadcrumbComponent } from './dashboardshared/breadcrumb/breadcrumb.component';
import { DashboardcardsComponent } from './dashboardshared/dashboardcards/dashboardcards.component';
import { TableComponent } from './dashboardshared/table/table.component';
import { FinanceComponent } from './finance/finance.component';
import { BalanceComponent } from './financeshared/balance/balance.component';
import { FinancebreadcrumbComponent } from './financeshared/financebreadcrumb/financebreadcrumb.component';
import { BudgetComponent } from './financeshared/budget/budget.component';
import { RecenttransactionsComponent } from './financeshared/recenttransactions/recenttransactions.component';
import { ForgotpasswordComponent } from './auth/forgotpassword/forgotpassword.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileBreadcrumbComponent } from './profileshared/profilebreadcrumb/profilebreadcrumb.component';
import { ChartscomComponent } from './dashboardshared/chartscom/chartscom.component';
import { ProfilebodyComponent } from './profileshared/profilebody/profilebody.component';
import { AnalyticsbreadcrumbComponent } from './analyticsshared/analyticsbreadcrumb/analyticsbreadcrumb.component';

@NgModule({
  declarations: [
    AppComponent,
    AnalyticsComponent,
    PageviewsComponent,
    StatscardsComponent,
    VisitorsoverviewComponent,
    OverviewComponent,
    DashboardComponent,
    BreadcrumbComponent,
    DashboardcardsComponent,
    TableComponent,
    FinanceComponent,
    BalanceComponent,
    BudgetComponent,
    FinancebreadcrumbComponent,
    RecenttransactionsComponent,
    ForgotpasswordComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    SidenavComponent,
    ProfileComponent,
    ProfileBreadcrumbComponent,
    ChartscomComponent,
    ProfilebodyComponent,
    AnalyticsbreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    
    DataTablesModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
