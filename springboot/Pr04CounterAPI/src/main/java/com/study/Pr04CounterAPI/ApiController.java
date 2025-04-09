package com.study.Pr04CounterAPI;

import org.springframework.web.bind.annotation.*;

@RequestMapping("/api")
@RestController
public class ApiController {

    private Counter counter = new Counter();

    @GetMapping("/plus")
    public Counter plus(){
        counter.setCount(counter.getCount()+1);
        return counter;
    }

    @GetMapping("/minus")
    public Counter minus(){
        counter.setCount(counter.getCount()-1);
        return counter;
    }

}
