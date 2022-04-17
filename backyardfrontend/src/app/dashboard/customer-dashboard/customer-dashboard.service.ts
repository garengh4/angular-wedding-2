import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Backyard } from 'src/app/shared/entity/Backyard';
import { Events } from 'src/app/shared/entity/Event';
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})
export class CustomerDashboardService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' }) // for passing err/success message from backend to html

  constructor(private http: HttpClient) { }

  public getAllBackyards(): Observable<Backyard[]> {
    let url: string = environment.customerApiUrl + '/getallbackyards'
    return this.http.get<Backyard[]>(url);
  }

  public getCustomerEvents(customerId: number): Observable<Events[]> {
    let url: string = environment.customerApiUrl + '/getallevents/' + customerId;
    return this.http.get<Events[]>(url);
  }

  public deleteCustomerEvent(eventId: number): Observable<string> {
    let url: string = environment.customerApiUrl + '/deleteevent/' + eventId;
    return this.http.delete<string>(url, { headers: this.headers, responseType: 'text' as 'json' });
  }


}