import { Component, OnInit } from '@angular/core';
import { Customer } from '../shared/entity/Customer';
import { Partner } from '../shared/entity/Partner';
import { HomeService } from './home.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  errMsg: string;
  successMsg: string;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getAllPartner();
    this.getAllCustomers();
  }

  /* ====================================================================================================================================================== */
  // Function to get all registered partners
  partnersInDB: Partner[];

  public getAllPartner(): void {
    this.homeService.getAllPartner().subscribe({
      next: response => {
        this.partnersInDB = response;
        this.successMsg = "data successfully retrieved."
      }, error: response => {
        this.errMsg = response;
        console.error(this.errMsg);
      }
    })
  }

  /* ====================================================================================================================================================== */
  // Function to delete partner which will also auto update table
  deletePartner: Partner = new Partner;

  public onDeletePartner(deletePartner: Partner): void {
    this.homeService.deletePartner(deletePartner.partnerId).subscribe({
      next: response => {
        this.successMsg = response;
        console.log(this.successMsg);
        this.getAllPartner();
      }, error: response => {
        this.errMsg = response;
        console.error(this.errMsg);
      }
    })
  }

  /* ====================================================================================================================================================== */
  // function to get all registered customers
  customerInDB: Customer[];

  getAllCustomers() {
    this.homeService.getAllCustomers().subscribe({
      next: response => {
        this.customerInDB = response;
        this.successMsg = "data successfully retrieved."
      }, error: response => {
        this.errMsg = response;
        console.error(this.errMsg);
      }
    })
  }

  /* ====================================================================================================================================================== */

  deleteCustomer: Customer = new Customer;

  public onDeleteCustomer(deleteCustomer: Customer): void {
    this.homeService.deleteCustomer(deleteCustomer.customerId).subscribe({
      next: response => {
        this.successMsg = response;
        console.log(this.successMsg);
        this.getAllCustomers();
      }, error: response => {
        this.errMsg = response;
        console.error(this.errMsg);
      }
    })
  }

}