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

  getAllEvents(customerId: number): Observable<Events[]> {
    return this.http.get<Events[]>(environment.customerApiUrl + "/getallevents/" + customerId);
  }

  deleteEvent(eventId: number): Observable<string> {
    return this.http.delete<string>(environment.customerApiUrl + "/deleteevent/" + eventId);
  }

  updateEvent(event: Events): Observable<Events> {
    return this.http.post<Events>((environment.customerApiUrl + "/updateevent"), event);
  }
}