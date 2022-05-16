import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Customer } from "../shared/entity/Customer";
import { Partner } from "../shared/entity/Partner";

@Injectable({
  providedIn: 'root'
})

export class HomeService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' }) // for passing err/success message from backend to html

  constructor(private http: HttpClient) { }

  public getAllPartner(): Observable<Partner[]> {
    let url: string = environment.partnerApiUrl + "/partner/getall";
    return this.http.get<Partner[]>(url);
  }

  public deletePartner(partnerEmailId: string): Observable<string> {
    let url: string = environment.partnerApiUrl + '/partner/' + partnerEmailId + '/delete';
    return this.http.delete<string>(url, { headers: this.headers, responseType: 'text' as 'json' });
  }

  // ==================================================================================================================
  public getAllCustomers(): Observable<Customer[]> {
    let url: string = environment.customerApiUrl + '/customer/getall'
    return this.http.get<Customer[]>(url);
  }

  public deleteCustomer(customerEmailId: string): Observable<string> {
    let url: string = environment.customerApiUrl + '/delete/' + customerEmailId + '/delete';
    return this.http.delete<string>(url, { headers: this.headers, responseType: 'text' as 'json' });
  }
}