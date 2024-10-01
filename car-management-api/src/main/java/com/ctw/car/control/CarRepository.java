package com.ctw.car.control;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.ctw.car.entity.Car;
import com.ctw.car.entity.CarEntity;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.Dependent;
import jakarta.transaction.Transactional;

@Dependent
public class CarRepository implements PanacheRepository<CarEntity> {
    public List<Car> fetchAllCars() {
        return listAll()
                .stream()
                .map(CarEntity::toCar)
                .collect(Collectors.toCollection(ArrayList::new));
    }

    @Transactional
    public Car setCar(Car car) {
        // Create a new CarEntity from the Car object
        CarEntity carEntity = new CarEntity();
        carEntity.brand = car.getBrand();
        carEntity.model = car.getModel();
        carEntity.engineType = car.getEngineType();

        // Set the created at and created by fields
        carEntity.createdAt = LocalDateTime.now();
        carEntity.createdBy = "Your Application"; // Replace with the actual creator

        // Persist the CarEntity
        persist(carEntity);

        // Return the persisted Car
        return CarEntity.toCar(carEntity);
    }
}
