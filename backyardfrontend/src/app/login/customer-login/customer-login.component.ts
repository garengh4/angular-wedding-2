import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/shared/entity/Customer';
import { CustomerLoginService } from './customer-login.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: []
})
export class CustomerLoginComponent implements OnInit {
  successMsg: string;
  errMsg: string;

  constructor(
    private fb: FormBuilder,
    private customerLoginService: CustomerLoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  loginCustomer: Customer = new Customer();;
  tryToLogin: boolean = false;  
  loginCustomerForm: FormGroup;

  public createLoginForm(): void {
    this.loginCustomerForm = this.fb.group({
      customerEmailId: [this.loginCustomer.customerEmailId, [Validators.required], null],
      firstName: [this.loginCustomer.firstName, [Validators.required], null],
      lastName: [this.loginCustomer.lastName, [Validators.required], null],
      password: [this.loginCustomer.password, [Validators.required], null]
    })
  }

  public onLoginCustomer(): void {
    this.tryToLogin = true;
    this.errMsg = '';
    this.successMsg = '';
    this.loginCustomer = this.loginCustomerForm.value as Customer;

    this.customerLoginService.authenticateCustomer(this.loginCustomer).subscribe({
      next: msg => {
        this.loginCustomer = msg;

        sessionStorage.setItem('loggedInCustomer', JSON.stringify(this.loginCustomer)); //some bug here in name towards 'loggedInPartner'

        this.tryToLogin = false;
        this.router.navigate(['/customer-dashboard']);
      }, error: msg => {
        this.tryToLogin = false;
        this.errMsg = <any>msg;
      }
    })
  }



}