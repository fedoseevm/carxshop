import { Injectable } from '@angular/core';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CarPurchaseService {
  private currentCar: IProduct | null = null;

  constructor() { }

  public setCurrentCar(car: IProduct) {
    this.currentCar = car;
  }

  public getCurrentCar(): IProduct | null {
    return this.currentCar;
  }
}
