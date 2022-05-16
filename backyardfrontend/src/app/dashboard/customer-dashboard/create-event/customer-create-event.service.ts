import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Events } from 'src/app/shared/entity/Event';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CustomerCreateEventService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' }) // for passing err/success message from backend to html

  constructor(private http: HttpClient) { }

  public addEventForCustomer(customerEmailId: string, event: Events): Observable<string> {
    let url: string = environment.customerApiUrl + '/addevent/' + customerEmailId;
    return this.http.post<string>(url, event, { headers: this.headers, responseType: 'text' as 'json' });
  }
}