package com.ctw.car.boundary;

import java.util.List;

import com.ctw.car.control.CarService;
import com.ctw.car.entity.Car;
import com.ctw.car.entity.Routes;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.QueryParam;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path(Routes.CAR)
@ApplicationScoped
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class CarResource {

    private final CarService carService;

    @Inject
    public CarResource(final CarService carService) {
        this.carService = carService;
    }

    @GET
    public Response getCars(
            @QueryParam("brand") String brand
    ) {
        List<Car> cars = this.carService.getCars();
        return Response.status(200).entity(cars).build();
    }

    @POST
    @Path("/")
    public Response addCar(Car car) {
        Car addedCar = this.carService.addCar(car);
        return Response.status(201).entity(addedCar).build();
    }
}
