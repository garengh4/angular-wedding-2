import { Component, Input, OnInit, Output } from '@angular/core';
import { ShowAllEventsService } from './show-all-events.service';
import { Events } from 'src/app/shared/entity/Event';
import { Customer } from 'src/app/shared/entity/Customer';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-show-all-events',
  templateUrl: './show-all-events.component.html',
  styleUrls: []
})
export class ShowAllEventsComponent implements OnInit {
  eventsInDB: Events[];
  errMsg: any;
  loggedInCustomer: Customer;
  isOpened: boolean = false;
  updateEventForm: FormGroup;
  custId: any;
  updatedEvent: Events;



  constructor(private showEventsService: ShowAllEventsService, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.getAllEvents();
  }

  getAllEvents() {
    this.loggedInCustomer = JSON.parse(sessionStorage.getItem("loggedInCustomer") || '{}'); //some bug here in name 'loggedInPartner'
    this.showEventsService.getCustomerEvents(this.loggedInCustomer.customerEmailId).subscribe(
      (success) => { this.eventsInDB = success },
      (error) => { this.errMsg = error }
    );
  }

  // Triggers template2 to show on screen (the update form)
  showUpdateForm(event: Events) {
    this.createUpdateFormMethod(event);
    this.isOpened = true;


  }
  // Auto populates the update form with the original values of the Event which we are updating
  createUpdateFormMethod(event: Events) {
    this.loggedInCustomer = JSON.parse(sessionStorage.getItem("loggedInCustomer") || '{}');
    this.custId = this.loggedInCustomer.customerEmailId;
    this.updateEventForm = this.fb.group({
      eventName: [event.eventName, Validators.required],
      eventDescription: [event.eventDescription, Validators.required],
      eventDate: [event.eventDate, Validators.required],
      customerEmailId: [this.custId, Validators.required],
      backyardId: [event.backyardId, Validators.required],
      eventId: [event.eventId, Validators.required]
    });

  }

  // on submit, this method is called to trigger the service method
  updateEvent() {
    this.updatedEvent = this.updateEventForm.value as Events;
    console.log(this.updatedEvent)
    this.showEventsService.updateEvent(this.updatedEvent).subscribe(
      (success) => {
        console.log(success);
        this.getAllEvents();
        this.isOpened = false;
      },
      (error) => {console.log(error); }
    );
   // this.isOpened = false;

  }

  delete(event: Events) {
    this.showEventsService.deleteCustomerEvents(this.loggedInCustomer.customerEmailId, event.eventId).subscribe(
      (success) => { },
      (error) => { }
    );

    let arr = this.eventsInDB;

    const index = this.eventsInDB.indexOf(event);
    arr.splice(index, 1);
    this.eventsInDB = arr;


  }
}