import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/shared/entity/Customer';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CustomerLoginService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  public login(customer: Customer): Observable<Customer> {
    let url = environment.customerApiUrl + '/authenticate';
    return this.http.post<Customer>(url, customer, { headers: this.headers });

  }
}