import {Injectable} from "@angular/core";
import {ProductModel} from "../models";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: ProductModel[] = [];

  getProducts(): ProductModel[] {
    return this.products;
  }

  addProducts(products: ProductModel[]): void {
    this.products = this.products.concat(products);
  }

  removeProduct(index: number): void {
    this.products.splice(index, 1);
  }
}
