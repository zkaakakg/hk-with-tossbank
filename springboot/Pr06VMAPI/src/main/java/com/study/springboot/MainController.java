package com.study.springboot;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;

@Controller
public class MainController {
    @GetMapping("/")
    public String main(Model model){
        model.addAttribute("products", new ArrayList<>());
        return "index";
    }
}
