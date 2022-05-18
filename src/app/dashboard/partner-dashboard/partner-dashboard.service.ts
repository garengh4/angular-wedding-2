import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Backyard } from "src/app/shared/entity/Backyard";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})

export class PartnerDashboardService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' }) // for passing err/success message from backend to html

  constructor(private http: HttpClient) { }

  public getPartnerBackyards(partnerEmailId: string): Observable<Backyard[]> {
    let url: string = environment.partnerApiUrl + '/backyard/' + partnerEmailId + '/getall';
    return this.http.get<Backyard[]>(url);
  }

  public addBackyardToPartner(partnerEmailId: string, backyard: Backyard): Observable<string> { //return type string to allow success/err msg
    let url: string = environment.partnerApiUrl + '/backyard/' + partnerEmailId + '/add';
    return this.http.post<string>(url, backyard, { headers: this.headers, responseType: 'text' as 'json' });
  }

  public deletePartnerBackyard(partnerEmailId: string, backyardId: number): Observable<string> {
    let url: string = environment.partnerApiUrl + '/backyard/' + partnerEmailId + '/delete/' + backyardId;
    return this.http.delete<string>(url, { headers: this.headers, responseType: 'text' as 'json' });
  }

  
}