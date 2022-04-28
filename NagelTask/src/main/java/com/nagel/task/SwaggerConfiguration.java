package com.nagel.task;


import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/*
@Configuration
@EnableSwagger2
*/

public class SwaggerConfiguration {



    @Value("${swagger.api.title:}")
    private String apiTitle;

    @Value("${swagger.api.description:}")
    private String apiDescription;

    @Value("${swagger.api.version:}")
    private String apiVersion;


    //@Value("${swagger.api.basePackage}")
    private String basePackage="com.nagel.task";

    /*ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("apiTitle")
                .description("apiDescription")
                .version("apiVersion")
                .build();
    }*/

    /**
     * Helper method to create and initialize docket bean.
     *
     * @return Docket object
     */
//    @Bean
//    public Docket api() {
//        return new Docket(DocumentationType.SWAGGER_2)
//                .apiInfo(apiInfo())
//                .select()
//                .apis(RequestHandlerSelectors.basePackage(this.basePackage))
//                .paths(PathSelectors.any())
//                .build();
//
//    }
//
/*    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2).select()
                .apis(RequestHandlerSelectors.basePackage("com.tutorialspoint.swaggerdemo")).build();
    }*/
}
