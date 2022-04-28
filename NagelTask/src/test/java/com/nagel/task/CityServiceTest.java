package com.nagel.task;

import com.nagel.task.model.City;
import com.nagel.task.repository.CityRepository;
import com.nagel.task.services.CityService;
import com.nagel.task.services.CityUtilities;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.DefaultResourceLoader;
import org.springframework.core.io.FileSystemResourceLoader;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.notNull;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
public class CityServiceTest {

    @Mock
    private CityRepository cityRepository;

    @InjectMocks
    private CityService cityService;

    private City city;

    @Autowired
    ResourceLoader resourceLoader;

    @BeforeEach
    public void setup(){
        resourceLoader = new DefaultResourceLoader();
        city = City.builder()
                .id(1L)
                .name("Delhi")
                .photo("https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/IN-DL.svg/439px-IN-DL.svg.png")
                .build();
    }


    @Test
    public void testReadFileWithClassLoader(){
        ClassLoader classLoader = this.getClass().getClassLoader();
        File file = new File(classLoader.getResource("assets/cities.csv").getFile());
        assertTrue(file.exists());
    }

    @Test
    public void testReadFileWithClassLoader_Count(){
        List<City> cityList = null;
        Resource resource = resourceLoader.getResource("classpath:" + "assets/cities.csv");
        try {
           cityList =  CityUtilities.loadCsv(resource.getInputStream());
        } catch (IOException e) {
            e.printStackTrace();
        }
        Assertions.assertThat(cityList).isNotEmpty();
    }
}
