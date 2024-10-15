import {Injectable} from "@angular/core";
import {Product} from "../models";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [];

  getProducts(): Product[] {
    return this.products;
  }

  addProducts(products: Product[]): void {
    this.products = this.products.concat(products);
  }

  removeProduct(index: number): void {
    this.products.splice(index, 1);
  }
}
