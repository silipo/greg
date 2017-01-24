package it.istat.dcit.itc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;


@SpringBootApplication ( scanBasePackages = {"it.istat.dcit.itc"})
public class GregApplication extends SpringBootServletInitializer {

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(GregApplication.class);
	}

	public static void main(String[] args) {
		SpringApplication.run(GregApplication.class, args);
	}
}
