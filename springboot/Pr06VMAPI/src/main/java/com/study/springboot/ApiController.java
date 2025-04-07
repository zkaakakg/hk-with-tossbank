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
        products.add(new Product(reqDto.getName(), reqDto.getPrice(), reqDto.getLimitDate()));
        System.out.println(reqDto.getLimitDate());
        return  "상품이 추가되었습니다!";
    }

    @GetMapping("/product")
    public List<Product> getList() {
        return products;
    }

    @PutMapping("/product/{index}")
    @ResponseBody
    public String update(@PathVariable("index") int index, @RequestBody ReqDto reqDto){
        if (index >= 0 && index < products.size()) {
            Product updatedProduct = new Product(reqDto.getName(), reqDto.getPrice(), reqDto.getLimitDate());
            products.set(index, updatedProduct);
            return "상품이 수정되었습니다!";
        } else {
            return "존재하지 않는 인덱스입니다!";
        }
    }


    @DeleteMapping("/product/{index}")
    public String delete(@PathVariable("index") int index){
        products.remove(index);
        return "상품이 삭제되었습니다.";
    }


}
