import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/shared/entity/Customer';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CustomerSignupService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // for passing err/success message from backend to html

  constructor(private http: HttpClient) { }

  public registerNewCustomer(customer: Customer): Observable<string> {
    let url: string = environment.customerApiUrl + '/customer/register';

    return this.http.post<string>(url, customer, { headers: this.headers, responseType: 'text' as 'json' });
  }


}