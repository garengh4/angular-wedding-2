import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Events } from 'src/app/shared/entity/Event';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ShowAllEventsService {

  constructor(private http: HttpClient) { }

  getCustomerEvents(customerEmailId: string): Observable<Events[]> {
    return this.http.get<Events[]>(environment.customerApiUrl + "/event/" + customerEmailId + '/getall');
  }

  deleteCustomerEvents(customerEmailId: string, eventId: number): Observable<string> {
    return this.http.delete<string>(environment.customerApiUrl + "/event/" + customerEmailId + '/delete/' + eventId);
  }

  updateEvent(event: Events): Observable<Events> {
    return this.http.post<Events>((environment.customerApiUrl + "/updateevent"), event);
  }
}