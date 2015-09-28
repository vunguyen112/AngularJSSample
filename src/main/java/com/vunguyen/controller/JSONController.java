package com.vunguyen.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.vunguyen.model.Car;

@Controller
public class JSONController {

	@RequestMapping("/")
	public String hello() {
		return "hello";
	}

	@RequestMapping(value = "/car", method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	public @ResponseBody List<Car> getCar() {
		System.out.println("-----------GetCar----------");
		List<Car> listCar = new ArrayList<Car>();
		Car car1 = new Car();
		car1.setId(1);
		car1.setPlate("Car Plate 1");
		car1.setColor("Green");
		car1.setEntrance(new Date().toLocaleString());

		Car car2 = new Car();
		car2.setId(2);
		car2.setPlate("Car Plate 2");
		car2.setColor("Blue");
		car2.setEntrance(new Date().toLocaleString());

		Car car3 = new Car();
		car3.setId(3);
		car3.setPlate("Car Plate 3");
		car3.setColor("Red");
		car3.setEntrance(new Date().toLocaleString());

		listCar.add(car1);
		listCar.add(car2);
		listCar.add(car3);
		return listCar;
	}

	@RequestMapping(value = "/car/{id}", method = RequestMethod.GET)
	public @ResponseBody Car getCarById(@PathVariable("id") int id) {
		System.out.println("-----------GetCar By ID: " + id + "----------");
		Car car1 = new Car();
		car1.setId(id);
		car1.setPlate("Car Plate 1");
		car1.setColor("Green");
		car1.setEntrance(new Date().toLocaleString());
		return car1;
	}

	@RequestMapping(value = "/car", method = RequestMethod.POST)
	public @ResponseBody Car addCar(@RequestBody Car car) {
		System.out.println("-----------------Add Car----------------");
		System.out.println("Car plate:" + car.getPlate());
		System.out.println("Car color:" + car.getColor());
		System.out.println("Car entrance:" + car.getEntrance());
		System.out.println("----------------------------------------");
		return car;
	}

	@RequestMapping(value = "/car/{id}", method = RequestMethod.DELETE)
	@ResponseStatus(value = HttpStatus.OK)
	public void deleteCar(@PathVariable("id") String id) {
		System.out.println("-----------------Delete Car----------------");
		System.out.println("Car Id:" + id);
		System.out.println("----------------------------------------");
	}

	@RequestMapping(value = "/car/{id}", method = RequestMethod.PUT)
	@ResponseStatus(value = HttpStatus.OK)
	public void updateCar(@PathVariable("id") String id, @RequestBody Car car) {
		System.out.println("-----------------Update Car----------------");
		System.out.println("Car Id:" + id);
		System.out.println("Car plate:" + car.getPlate());
		System.out.println("Car color:" + car.getColor());
		System.out.println("Car entrance:" + car.getEntrance());
		System.out.println("----------------------------------------");
	}
}