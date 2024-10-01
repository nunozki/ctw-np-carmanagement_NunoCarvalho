import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Car } from '../model/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiURL = "http://localhost:8080"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  getAll(): Observable<any> {

    return this.httpClient.get(this.apiURL + '/car')

    .pipe(
      catchError(this.errorHandler)
    )
  }
  addCar(car: Car): Observable<any> {
    return this.httpClient.post(this.apiURL + '/car', car, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  removeCar(carId: string): Observable<any> {
    return this.httpClient.delete(`${this.apiURL + '/car'}/${carId}`);
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  errorHandler(error:any) {
    let errorMessage = '';
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    return throwError(errorMessage);
  }
}
