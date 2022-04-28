package com.nagel.task.controller;

import com.nagel.task.model.City;
import com.nagel.task.model.PageResponse;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableSwagger2
@Api(tags = "Receive request for cities")
@Validated
public interface CityApi {

    @ApiOperation(value = "Getting all cities")
    @ApiResponses(
            value = {
                    @ApiResponse(code = 200, message = "Getting all cities"),
                    @ApiResponse(code = 400, message = "Bad request"),
                    @ApiResponse(code = 500, message = "Something went wrong")
            })

    public ResponseEntity<PageResponse> retrieveCities(Integer page);
}
