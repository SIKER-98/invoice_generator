import {Pipe, PipeTransform} from "@angular/core";
import {Product} from "../models";


@Pipe({name: 'total'})
export class TotalPipe implements PipeTransform {
  transform(products: Product[]): number {
    return products.reduce((acc: number, product: Product) =>
      acc + product.count * product.price, 0
    );
  }
}
