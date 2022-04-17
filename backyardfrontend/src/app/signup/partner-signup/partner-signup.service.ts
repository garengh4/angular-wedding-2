import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Partner } from "src/app/shared/entity/Partner";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})

export class PartnerSignupService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // for passing err/success message from backend to html
  constructor(private http: HttpClient) { }

  public registerNewPartner(partner: Partner): Observable<string> { //return type string to allow success/err messages to be passed
    let url: string = environment.partnerApiUrl + '/register';
    return this.http.post<string>(url, partner, { headers: this.headers, responseType: 'text' as 'json' });
  }

  public deletePartner(partnerId: number): Observable<string> {
    let url: string = environment.partnerApiUrl + '/deletepartner/' + partnerId;
    return this.http.delete<string>(url, { headers: this.headers, responseType: 'text' as 'json' });
  }
}