import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Partner } from "src/app/shared/entity/Partner";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})

export class PartnerLoginService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }

  public authenticatePartner(partner: Partner): Observable<Partner> {
    let url = environment.partnerApiUrl + '/partner/authenticate';
    return this.http.post<Partner>(url, partner, { headers: this.headers });
  }

}