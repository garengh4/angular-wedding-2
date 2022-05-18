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
    let url: string = environment.partnerApiUrl + '/backyard/getall'
    return this.http.get<Backyard[]>(url);
  }

  public getCustomerEvents(customerEmailId: string): Observable<Events[]> {
    let url: string = environment.customerApiUrl + '/event/' + customerEmailId +'/getall';
    return this.http.get<Events[]>(url);
  }

  public deleteCustomerEvent(customerEmailId: string, eventId: number): Observable<string> {
    let url: string = environment.customerApiUrl + '/event/' + customerEmailId + '/delete/' + eventId;
    return this.http.delete<string>(url, { headers: this.headers, responseType: 'text' as 'json' });
  }


}