import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarService } from '../../service/car.service';
import { Car } from '../../model/car';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  cars: Car[] = []

  constructor(public carService: CarService) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.carService.getAll().subscribe((data: any) => {
      this.cars = data;
    });
  }

  removeCar(carId: string) {
    this.carService.removeCar(carId).subscribe(() => {
      this.cars = this.cars.filter(car => car.id !== carId);
    });
  }
}
