package com.nagel.task.model;

import com.opencsv.bean.CsvBindByName;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class CityCsvData {

    @CsvBindByName
    private Long id;
    @CsvBindByName
    private String name;
    @CsvBindByName
    private String photo;
}
