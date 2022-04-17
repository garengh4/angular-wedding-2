import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomerCreateEventComponent } from "./dashboard/customer-dashboard/create-event/customer-create-event.component";
import { CustomerDashboardComponent } from "./dashboard/customer-dashboard/customer-dashboard.component";
import { ShowAllEventsComponent } from "./dashboard/customer-dashboard/show-all-events/show-all-events.component";
import { PartnerDashboardComponent } from "./dashboard/partner-dashboard/partner-dashboard.component";
import { HomeComponent } from "./home/home.component";
import { CustomerLoginComponent } from "./login/customer-login/customer-login.component";
import { PartnerLoginComponent } from "./login/partner-login/partner-login.component";
import { CustomerSignupComponent } from "./signup/customer-signup/customer-signup.component";
import { PartnerSignupComponent } from "./signup/partner-signup/partner-signup.component";

const routes: Routes=[
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'home', component: HomeComponent},
  { path: 'partner-login', component: PartnerLoginComponent},
  { path: 'partner-signup', component: PartnerSignupComponent},
  { path: 'partner-dashboard', component: PartnerDashboardComponent},
  { path: 'customer-login', component: CustomerLoginComponent},
  { path: 'customer-signup', component: CustomerSignupComponent},
  { path: 'customer-dashboard', component: CustomerDashboardComponent},
  { path: 'customer-create-event/:backyardId', component: CustomerCreateEventComponent},
  { path: 'show-all-events', component: ShowAllEventsComponent}
]

@NgModule({
  declarations:[],
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule {}