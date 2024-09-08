import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, delay, retry, throwError } from "rxjs";
import { IProduct } from "../models/product";
import { ErrorService } from "./error.service";

@Injectable({
    providedIn: 'root'
})
export class CarService {
    constructor(
        private http: HttpClient,
        private errorService: ErrorService
    ) {}

    getAllCars(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>('https://fedoseevm.github.io/Cars-database/db-github.json', {
            // params: new HttpParams().append('_limit', 5)
        }).pipe(
            delay(0),
            retry(2),
            catchError(this.ErrorHandler.bind(this))
        )
    }

    private ErrorHandler(error: HttpErrorResponse) {
        this.errorService.handle(error.message)
        return throwError( () => error.message)
    }
}