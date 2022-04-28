package com.nagel.task.model;

import lombok.Getter;
import lombok.Setter;

import java.net.URL;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
public class PageResponse {

    private Set<City> cityList = new HashSet<>();
    private Long currPage;
    private Long totalPages;
    private Long totalCount;
    private URL nextUrl;
    private URL prevUrl;
}
