package com.nagel.task.controller;


import com.nagel.task.model.PageResponse;
import com.nagel.task.services.CityService;
import com.nagel.task.services.CityUtilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/cities", produces = MediaType.APPLICATION_JSON_VALUE)
public class CityController implements CityApi{

    @Autowired
    CityService cityService;


    @ResponseBody
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<PageResponse> retrieveCities(@RequestParam(value="page", defaultValue="1") Integer page) {
        Long pageNum = Long.valueOf(page);
        PageResponse pageResponse = cityService.finadAll(pageNum);
        return new ResponseEntity<PageResponse>(pageResponse, HttpStatus.OK);
    }


}
