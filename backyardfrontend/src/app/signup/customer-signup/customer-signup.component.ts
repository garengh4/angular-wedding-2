import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  newCustomer: Customer;

  constructor(private fb: FormBuilder, private rest: CustomerSignupService) { }

  signupCustomerForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required]
    })

  ngOnInit(): void {
  }

  onSignupCustomer() {
    this.successMsg = '';
    this.errMsg = '';
    this.newCustomer = this.signupCustomerForm.value as Customer;
    this.rest.addCustomer(this.newCustomer).subscribe(
      (success) => {
        this.successMsg = success;
        this.signupCustomerForm.reset() 
        },
      (error) => {
        console.log(error);
        this.errMsg = <any> error; }
    );

  }

}