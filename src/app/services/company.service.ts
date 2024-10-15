import {Injectable} from "@angular/core";
import {delay, Observable, retry} from "rxjs";
import {CompanyInfo} from "../models";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiGetCompanyInfoUrl = 'http://localhost:3000/api/company';

  constructor(private httpClient: HttpClient) {
  }

  public getCompanyInfo(): Observable<CompanyInfo> {
    return this.httpClient.get<CompanyInfo>(this.apiGetCompanyInfoUrl)
      .pipe(
        retry(3),
        delay(1000),
      );
  }
}
