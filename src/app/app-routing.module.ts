import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { ForgotpasswordComponent } from "./auth/forgotpassword/forgotpassword.component";
import { AnalyticsComponent } from "./analytics/analytics.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FinanceComponent } from "./finance/finance.component";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'finance', component: FinanceComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

