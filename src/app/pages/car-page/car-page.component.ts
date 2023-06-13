import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CarService } from 'src/app/services/products.service';
import { IProduct } from 'src/app/models/product';
import { Observable, BehaviorSubject, combineLatest, map, tap } from 'rxjs';

// Wyłączono z powodu stworzenia json-serwera
// import { products as data, products } from 'src/app/data/products';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css']
})

export class CarPageComponent implements OnInit {
  title = 'CarXShop';
  // products : IProduct[] = []
  loading = false
  cars$: Observable<IProduct[]>
  private allCars$ = new BehaviorSubject<IProduct[]>([]);
  term = ''
  selectedManufacturer = '';
  filteredCars$: Observable<IProduct[]>;
  
  manufacturers = [
    'Chevrolet', 
    'Dodge', 
    'Ford', 
    'Honda', 
    'Hyundai', 
    'Kia', 
    'Mazda', 
    'Nissan', 
    'Toyota'
  ];
  
  constructor(private carService: CarService) {}
  
  private manufacturer$ = new BehaviorSubject<string>('');
  
  ngOnInit(): void {
    this.loading = true;
    this.carService.getAllCars().subscribe((cars) => {
      this.allCars$.next(cars);
      this.loading = false;
    });
    this.cars$ = combineLatest([this.allCars$, this.manufacturer$]).pipe(
      map(([cars, manufacturer]) =>
        cars.filter(car => car.manufacturer.includes(manufacturer))
      )
    );
  }

  filterCarsByManufacturer(): void {
    this.manufacturer$.next(this.selectedManufacturer);
  }
  
}
