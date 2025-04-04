package com.study.springboot;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/api")
public class ApiController {
    ArrayList<Product> products = new ArrayList<>();

    @PostMapping("/product")
    @ResponseBody
    public String add(@RequestBody ReqDto reqDto){
        products.add(new Product(reqDto.getName(), reqDto.getPrice(), reqDto.getLimit_date()));
        return  "Product added successfully";
    }

    @GetMapping("/product")
    public List<Product> getList() {
        return products;
    }
//    @PutMapping("/product/{id}")
//    @ResponseBody
//    public String update(@PathVariable("id") int id, @RequestBody ReqDto reqDto){
//        if()
//
//
//        return "index";
//    }
//
//
//    @DeleteMapping("/product/{id}")
//    public String delete(){
//        return "index";
//    }


}
