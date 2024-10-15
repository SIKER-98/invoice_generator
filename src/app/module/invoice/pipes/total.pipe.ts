import {Pipe, PipeTransform} from "@angular/core";
import {ProductModel} from "../models";


@Pipe({name: 'total'})
export class TotalPipe implements PipeTransform {
  transform(products: ProductModel[]): number {
    return products.reduce((acc: number, product: ProductModel) =>
      acc + product.count * product.price, 0
    );
  }
}
