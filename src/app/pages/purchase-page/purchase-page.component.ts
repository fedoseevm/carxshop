import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IProduct } from 'src/app/models/product';
import { CarPurchaseService } from 'src/app/services/car-purchase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-page',
  templateUrl: './purchase-page.component.html',
  styleUrls: ['./purchase-page.component.css']
})
export class PurchasePageComponent implements OnInit, AfterViewInit {

  public car: IProduct | null = null;
  
  purchaseForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    address: ['', Validators.required]
  });
  isSubmitted = false;

  onSubmit(): void {
    console.log(
      'submitted form', 
      this.purchaseForm.value,
      this.purchaseForm.invalid
      );
      this.isSubmitted = true;
      if (this.purchaseForm.valid) {
        this.router.navigate(['/thank-you']);
    }
  }
  constructor(
    private carPurchase: CarPurchaseService,
    private fb: FormBuilder,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.car = this.carPurchase.getCurrentCar();
  }
  

  ngAfterViewInit(): void {
    const canvas = document.getElementById('signature-canvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d')!;
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    canvas.addEventListener('mousedown', (e) => {
      isDrawing = true;
      lastX = e.offsetX;
      lastY = e.offsetY;
    });

    canvas.addEventListener('mousemove', (e) => {
      if (isDrawing) {
        context.beginPath();
        context.moveTo(lastX, lastY);
        context.lineTo(e.offsetX, e.offsetY);
        context.stroke();
        lastX = e.offsetX;
        lastY = e.offsetY;
      }
    });

    canvas.addEventListener('mouseup', () => {
      isDrawing = false;
    });

    const clearButton = document.getElementById('clear-button')!;
    clearButton.addEventListener('click', () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
    });
  }

}
