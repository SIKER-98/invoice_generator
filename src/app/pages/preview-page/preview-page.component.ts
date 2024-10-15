import {Component, OnDestroy, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {CompanyInfo, Product} from "../../models";
import {HttpClient} from "@angular/common/http";
import {delay, retry, Subscription} from "rxjs";

@Component({
  selector: 'app-preview-page',
  templateUrl: './preview-page.component.html',
  styleUrls: ['./preview-page.component.scss']
})
export class PreviewPageComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();

  company?: CompanyInfo;
  products?: Product[];
  total: number = 0;

  constructor(private router: Router,
              private httpClient: HttpClient) {
    const navigation = this.router.getCurrentNavigation();
    this.products = navigation?.extras.state?.['products'] as Product[];
  }

  ngOnInit(): void {
    this.getCompanyData();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getCompanyData(): void {
    this.subscription.add(this.httpClient.get('http://localhost:3000/api/company')
      .pipe(
        retry(3),
        delay(1000)
      )
      .subscribe({
        next: data => this.company = data as CompanyInfo,
        error: err => console.error(err)
      }));
  }
}
