package com.ademarli.MyTask;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@EntityScan
@SpringBootApplication
public class MyTaskApplication {

	public static void main(String[] args) {
		SpringApplication.run(MyTaskApplication.class, args);
	}

}
