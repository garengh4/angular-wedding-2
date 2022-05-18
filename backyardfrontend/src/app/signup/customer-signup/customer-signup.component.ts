import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/shared/entity/Customer';
import { CustomerSignupService } from './customer-signup.service';

@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: []
})
export class CustomerSignupComponent implements OnInit {
  successMsg = '';
  errMsg = '';
  newCustomer: Customer = new Customer;

  constructor(
    private fb: FormBuilder,
    private customerSignupService: CustomerSignupService
  ) { }

  ngOnInit(): void {
    this.createCustomerForm();
  }

  signupCustomerForm: FormGroup;

  public createCustomerForm(): void {
    this.signupCustomerForm = this.fb.group({
      firstName: [this.newCustomer.firstName, [Validators.required], null],
      lastName: [this.newCustomer.lastName, [Validators.required], null],
      customerEmailId: [this.newCustomer.customerEmailId, [Validators.required], null],
      password: [this.newCustomer.password, [Validators.required], null]
    })
  }

  public onSignupCustomer(): void {
    this.errMsg = '';
    this.successMsg = '';
    this.newCustomer = this.signupCustomerForm.value as Customer; // passing values into Partner, then into service
    this.customerSignupService.registerNewCustomer(this.newCustomer).subscribe({
      next: msg => {
        this.successMsg = msg;
        this.signupCustomerForm.reset();
      },
      error: msg => {
        console.log(msg);
        this.errMsg = <any>msg;
      }
    })
  }
}