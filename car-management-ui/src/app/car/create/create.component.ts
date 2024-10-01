import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CarService } from '../../service/car.service'; // Import the CarService
import { EngineType } from '../enginetype/engine-type.enum';
import { Car } from '../../model/car';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule], // Add ReactiveFormsModule and FormsModule
  providers: [CarService], // Add CarService to the providers
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit {
  newCarForm: FormGroup;
  engineTypes = [
    { value: EngineType.BEV, label: 'Electric' },
    { value: EngineType.PHEV, label: 'Plugin hybrid' },
    { value: EngineType.GASOLINE, label: 'ICE/Gasoline' },
    { value: EngineType.DIESEL, label: 'ICE/Diesel' }
  ];
  cars: Car[] = []; // Declare the cars property
  car?: Car;

  constructor(private carService: CarService, private router: Router) { // Injected CarService
    console.log(this.engineTypes);
    this.newCarForm = new FormGroup({
      model: new FormControl('', Validators.required),
      brand: new FormControl('', Validators.required),
      engineType: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  submitNewCar(): void {
    if (this.newCarForm.valid) { // Check if the form is valid
      const newCar = this.newCarForm.value;
      this.carService.addCar(newCar).subscribe(
        (response) => {
          // Handle the response from the API (e.g. display a success message)
          console.log(response);
          this.cars.push(response); // Add the new car to the cars array
          this.newCarForm.reset(); // Reset the form after submission

          // Navigate to the main menu
          this.router.navigate(['/index.component']);
        },
        (error) => {
          // Handle the error (e.g. display an error message)
          console.error(error);
        }
      );
    } else {
      // Handle the case when the form is invalid
      console.error('Form is invalid');
    }
  }
}
