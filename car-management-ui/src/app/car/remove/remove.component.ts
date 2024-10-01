import { Component, OnInit } from '@angular/core';
import { CarService } from '../../service/car.service'; // Import the CarService
import { Car } from '../../model/car';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrl: './remove.component.css'
})

export class RemoveComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getAll().subscribe(cars => {
      this.cars = cars;
    });
  }

  removeCar(carId: string): void {
    if (confirm('Are you sure you want to delete this car?')) {
      // Call the removeCar method
      this.carService.removeCar(carId).subscribe(
        () => {
          this.cars = this.cars.filter(car => car.id !== carId);
          this.showSuccessPopup('Car removed successfully!');
        },
        error => {
          this.showErrorPopup('Error removing car: ' + error.message);
        }
      );
    }
  }

  showSuccessPopup(message: string): void {
    alert(message); // Simple alert box
  }

  showErrorPopup(message: string): void {
    alert(message); // Simple alert box
  }
}
