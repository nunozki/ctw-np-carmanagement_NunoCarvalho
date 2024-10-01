package com.ctw.car.control;

import java.util.List;

import com.ctw.car.entity.Car;

import jakarta.enterprise.context.Dependent;
import jakarta.inject.Inject;

@Dependent
public class CarService {
    private final CarRepository carRepository;

    @Inject
    public CarService(final CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    public List<Car> getCars() {
        return carRepository.fetchAllCars();
    }
    public Car addCar(Car car) {
        return carRepository.setCar(car);
    }
}
