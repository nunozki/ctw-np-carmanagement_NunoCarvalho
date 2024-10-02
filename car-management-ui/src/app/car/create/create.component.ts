import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CarService } from '../../service/car.service'; // Import the CarService
import { EngineType } from '../enginetype/engine-type.enum';
import { Car, CarImpl } from '../../model/car';
import { Router } from '@angular/router';

// Now you can use the CarImpl class
let myCar: Car = new CarImpl();

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
  car: Car = new CarImpl();

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

  submitNewCar() {
    this.carService.addCar(this.car).subscribe(() => {
      this.car = new CarImpl();
    });
  }
}
