import { Component, OnInit } from '@angular/core';
import { Backyard } from 'src/app/shared/entity/Backyard';
import { Customer } from 'src/app/shared/entity/Customer';
import { CustomerDashboardService } from './customer-dashboard.service';
import { Events } from 'src/app/shared/entity/Event';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
  errMsg: string;
  successMsg: string;
  constructor(private customerDashboardService: CustomerDashboardService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getLoggedInCustomer();
    this.getCustomerEvents();

    this.getAllBackyards();


  }
  /* ====================================================================================================================================================== */
  // Function to get customer and its events
  loggedInCustomer: Customer;
  eventsInDB: Events[];

  public getLoggedInCustomer() {
    this.loggedInCustomer = JSON.parse(sessionStorage.getItem("loggedInCustomer") || '{}')
  }

  public getCustomerEvents(): void {
    this.customerDashboardService.getCustomerEvents(this.loggedInCustomer.customerEmailId).subscribe({
      next: response => {
        this.eventsInDB = response;
      }, error: response => {
        console.error(response);
      }
    })
  }
  /* ====================================================================================================================================================== */
  // Function to get all backyards in DB
  backyardsInDB: Backyard[];

  public getAllBackyards(): void {
    this.customerDashboardService.getAllBackyards().subscribe(
      (success) => { this.backyardsInDB = success }
    );
  }

  /* ====================================================================================================================================================== */
  // function to delete event
  toBeDeletedEvent: Events= new Events;

  public onDeleteEvent(toBeDeletedEvent: Events) {
    this.customerDashboardService.deleteCustomerEvent(this.loggedInCustomer.customerEmailId, toBeDeletedEvent.eventId).subscribe({
      next: response => {
        this.successMsg = response;
        this.getCustomerEvents();
      }, error: response => {
        this.errMsg = response;
        console.warn(this.errMsg);
      }
    })
  }
}