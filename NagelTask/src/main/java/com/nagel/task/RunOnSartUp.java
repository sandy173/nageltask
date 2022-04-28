package com.nagel.task;


import com.nagel.task.services.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component
public class RunOnSartUp {
    @Autowired
    CityService cityService;
    @EventListener(ApplicationReadyEvent.class)
    public void runAfterStartup() {
        cityService.processCityCsv();
    }
}
