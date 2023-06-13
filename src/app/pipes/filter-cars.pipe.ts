import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product';

@Pipe({
  name: 'filterCars'
})
export class FilterCarsPipe implements PipeTransform {

  transform(products: IProduct[], search: string): IProduct[] {
    if (search.length == 0) return products
    return products.filter( p => p.modelname.toLowerCase().includes(search.toLowerCase()) ||
    p.manufacturer.toLowerCase().includes(search.toLowerCase()))
  }

}
