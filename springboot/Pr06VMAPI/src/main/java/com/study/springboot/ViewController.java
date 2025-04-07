package com.study.springboot;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.ArrayList;

@Controller
public class ViewController {
    @GetMapping("/")
    public String main(Model model){
        model.addAttribute("products", new ArrayList<>());
        return "index";
    }
    @GetMapping("/product")
    public String add(){
        return "product-add";
    }
    @GetMapping("/product/edit/{index}")
    public String update(@PathVariable int index, Model model){
        model.addAttribute("index", index);
        return "product-edit";
    }
}
