import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {CompanyInfoModel} from "../models";
import {HttpClient} from "@angular/common/http";
import {tripleRetransmission} from "../../../shared/utils";


@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiGetCompanyInfoUrl = 'http://localhost:3000/api/company';

  constructor(private httpClient: HttpClient) {
  }

  public getCompanyInfo(): Observable<CompanyInfoModel> {
    return tripleRetransmission(this.httpClient.get<CompanyInfoModel>(this.apiGetCompanyInfoUrl));
  }
}
