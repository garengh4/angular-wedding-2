import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PartnerDashboardComponent } from './dashboard/partner-dashboard/partner-dashboard.component';
import { PartnerDashboardService } from './dashboard/partner-dashboard/partner-dashboard.service';
import { PartnerLoginComponent } from './login/partner-login/partner-login.component';
import { PartnerLoginService } from './login/partner-login/partner-login.service';
import { PartnerSignupComponent } from './signup/partner-signup/partner-signup.component';
import { PartnerSignupService } from './signup/partner-signup/partner-signup.service';
import { CustomerLoginComponent } from './login/customer-login/customer-login.component';
import { CustomerDashboardComponent } from './dashboard/customer-dashboard/customer-dashboard.component';
import { CustomerSignupComponent } from './signup/customer-signup/customer-signup.component';
import { CustomerSignupService } from './signup/customer-signup/customer-signup.service';
import { CustomerCreateEventComponent } from './dashboard/customer-dashboard/create-event/customer-create-event.component';
import { ShowAllEventsComponent } from './dashboard/customer-dashboard/show-all-events/show-all-events.component';
import { CustomerCreateEventService } from './dashboard/customer-dashboard/create-event/customer-create-event.service';
import { ShowAllEventsService } from './dashboard/customer-dashboard/show-all-events/show-all-events.service';
import { CustomerDashboardService } from './dashboard/customer-dashboard/customer-dashboard.service';
import { UpdateEventComponent } from './dashboard/customer-dashboard/update-event/update-event.component';
import { HomeComponent } from './home/home.component';
import { HomeService } from './home/home.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PartnerLoginComponent,
    PartnerSignupComponent,
    PartnerDashboardComponent,
    CustomerLoginComponent,
    CustomerDashboardComponent,
    CustomerSignupComponent,
    CustomerCreateEventComponent,
    ShowAllEventsComponent,
    UpdateEventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    HomeService,
    PartnerLoginService,
    PartnerSignupService,
    CustomerDashboardService,
    PartnerDashboardService,
    CustomerSignupService,
    CustomerCreateEventService,
    ShowAllEventsService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }