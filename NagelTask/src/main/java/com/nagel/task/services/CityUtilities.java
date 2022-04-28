package com.nagel.task.services;

import com.nagel.task.model.City;
import com.nagel.task.model.CityCsvData;
import com.opencsv.CSVReader;

import com.opencsv.bean.CsvToBeanBuilder;


import java.io.*;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

public class CityUtilities {

    public static final Long PAGE_SIZE = 10L;
    public static final String URL = "http://localhost:8090/api/cities";
    public static List<City> loadCsv(InputStream inputStream) {
        CSVReader csvReader = null;
        List<CityCsvData> records = null;
        try (Reader reader = new BufferedReader(new InputStreamReader(inputStream))) {
            records = new CsvToBeanBuilder(reader)
                    .withType(CityCsvData.class)
                    .withIgnoreLeadingWhiteSpace(true)
                    .build().parse();


        }catch ( IOException exception) {
            exception.printStackTrace();
        }
        return populateCityModel(records);
    }

    private static List<City> populateCityModel(final List<CityCsvData> records) {
        final List<City> cities = Optional
                .ofNullable(records)
                .orElse(Collections.emptyList())
                .stream()
                .map(p -> {
                    City city = City.builder()
                            .id(p.getId())
                            .name(p.getName())
                            .photo(p.getPhoto())
                            .build();
                    return city;
                }).collect(Collectors.toList());

        return cities;
    }

    public static Integer getPageStart(final Integer batchSize, final Integer pageNum) {
        return batchSize * pageNum;
    }

  /*  public static Integer getPageEnd(final Integer start, final Integer pageNum) {
        return start * BATCHSI;
    }*/

}
