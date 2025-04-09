package com.study.Pr03VM;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.ArrayList;

@Controller
public class MainController {
    ArrayList<Product> products = new ArrayList<>();

    @GetMapping("/")
    public String main(Model model){
        model.addAttribute("products", products);
        model.addAttribute("count", products.size());
        return "index";
    }

    @GetMapping("/product")
    public String create(){
        return "product-add";
    }

    @PostMapping("/product")
    public String create(@RequestParam(value="name") String name, @RequestParam(value="price") int price, @RequestParam(value="limit_date") LocalDate limit_date){
        products.add(new Product(name, price, limit_date));
        return "redirect:/";
    }

    @GetMapping("/product/edit/{index}")
    public String edit(@PathVariable("index") int index, Model model){
        Product product = products.get(index);
        model.addAttribute("index", index);
        model.addAttribute("product", product);
        return "product-edit";
    }

    @PostMapping("/product/edit/{index}")
    public String edit(@PathVariable("index") int index, @RequestParam(value="name") String name, @RequestParam(value="price") int price, @RequestParam(value="limit_date") LocalDate limit_date ){
        if (index >= 0 && index < products.size()) {
            Product updatedProduct = new Product(name, price, limit_date);
            products.set(index, updatedProduct);
            return "redirect:/";
        } else {
            return "존재하지 않는 인덱스입니다!";
        }
    }

    @GetMapping("/product/delete/{index}")
    public String delete(@PathVariable("index") int index){
        products.remove(index);
        return "index";
    }


}
