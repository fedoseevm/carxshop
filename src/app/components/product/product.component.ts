import { Component, Input, OnInit } from "@angular/core";
import { IProduct } from "src/app/models/product";
import { CarPurchaseService } from "src/app/services/car-purchase.service";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: IProduct

  details = false

  constructor(private carPurchase: CarPurchaseService) {}

  ngOnInit(): void {

  }

  public async setCar(product: IProduct) {
    this.carPurchase.setCurrentCar(product);
  }
}