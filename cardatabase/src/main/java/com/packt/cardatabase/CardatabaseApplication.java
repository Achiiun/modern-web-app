package com.packt.cardatabase;

import java.util.Arrays;

import com.packt.cardatabase.domain.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CardatabaseApplication implements CommandLineRunner {
	private static final Logger logger =
			LoggerFactory.getLogger(CardatabaseApplication.class);

	@Autowired
	private CarRepository repository;

	@Autowired
	private OwnerRepository orepository;

	@Autowired
	private UserRepository urepository;


	public static void main(String[] args) {
		SpringApplication.run(CardatabaseApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// Add owner objects and save these to db
		Owner owner1 = new Owner("John" , "Johnson");
		Owner owner2 = new  Owner("Mary" , "Robinson");
		orepository.saveAll(Arrays.asList(owner1, owner2));

		// Add car object and link to owners and save these to db
		Car car1 = new Car("Ford", "Mustang", "Red",
				"ADF-1121", 2021, 59000, owner1);
		Car car2 = new Car("Nissan", "Leaf", "White",
				"SSJ-3002", 2019, 29000, owner2);
		Car car3 = new Car("Toyota", "Prius", "Silver",
				"KKO-0212", 2020, 39000, owner2);
		repository.saveAll(Arrays.asList(car1, car2, car3));

		for (Car car : repository.findAll()) {
			logger.info(car.getBrand() + " " + car.getModel());
		}

		// 사용자 이름: user, 암호: user
		urepository.save(new User("user",
				"$2y$08$1CF1.WpGKP01SZAZdZfYR.nCm.tHiXmHnMteVZhy/co97E40h4X6y", "USER"));

		urepository.save(new User("admin",
				"$2y$08$ezfZJJ/2mGVmrFn2ceuM3.fUl.cAlFGX5wUCcb6W3NDUKuQljDNGK", "ADMIN"));
	}
}