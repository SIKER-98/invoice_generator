import {Component, OnDestroy, OnInit} from "@angular/core";
import {CompanyInfo, Product} from "../../models";
import {Subscription} from "rxjs";
import {CompanyService, ProductService} from "../../services";

@Component({
  selector: 'app-preview-page',
  templateUrl: './preview-page.component.html',
  styleUrls: ['./preview-page.component.scss']
})
export class PreviewPageComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();

  company?: CompanyInfo;
  products?: Product[];

  constructor(private productService: ProductService,
              private companyService: CompanyService) {
    this.getProducts();
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
      })
    );
  }

  private getProducts(): void {
    this.products = this.productService.getProducts();
  }

  removeProduct(index: number): void {
    this.productService.removeProduct(index);
  }
}
