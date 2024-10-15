import {Component, OnDestroy, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {CompanyInfo, Product} from "../../models";
import {Subscription} from "rxjs";
import {CompanyService} from "../../services";

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
              private companyService: CompanyService) {
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
    this.subscription.add(this.companyService.getCompanyInfo()
      .subscribe({
        next: data => this.company = data,
        error: err => console.error(err)
      }));
  }
}
