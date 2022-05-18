import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/shared/entity/Customer';
import { Events } from 'src/app/shared/entity/Event';
import { CustomerCreateEventService } from './customer-create-event.service';

@Component({
  selector: 'app-customer-create-event',
  templateUrl: './customer-create-event.component.html',
  styleUrls: []
})
export class CustomerCreateEventComponent implements OnInit {
  successMsg: string;
  errMsg: string;
  loggedInCustomer: Customer;
  newEvent: Events;

  constructor(
    private fb: FormBuilder,
    private customerCreateService: CustomerCreateEventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const routeParam = this.route.snapshot.paramMap;
    this.chosenBackyardID = Number(routeParam.get("backyardId"));

    this.getLoggedInCustomer();
    this.createEventForm();
  }

  /* ====================================================================================================================================================== */
  addEventForm: FormGroup;
  chosenBackyardID: number;

  public createEventForm(): void {
    this.addEventForm = this.fb.group({
      eventName: ['', Validators.required],
      eventDate: ['', Validators.required],
      backyardId: [this.chosenBackyardID, Validators.required]
    });
  }

  public getLoggedInCustomer() {
    this.loggedInCustomer = JSON.parse(sessionStorage.getItem("loggedInCustomer") || '{}'); //some bug here in name 'loggedInPartner'
  }
  public onAddEvent(): void {
    this.successMsg = '';
    this.errMsg = '';
    this.newEvent = this.addEventForm.value as Events;
    this.customerCreateService.addEventToCustomer(this.loggedInCustomer.customerEmailId, this.newEvent).subscribe({
      next: response => {
        this.newEvent.customerEmailId = this.loggedInCustomer.customerEmailId;
        this.successMsg = response;
        this.addEventForm.reset();
      }, error: response => {
        this.errMsg = response;
        console.error(this.errMsg);
      }
    });
  }

}