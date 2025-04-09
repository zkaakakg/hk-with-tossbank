package com.study.Pr01Counter;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {
    int cnt = 0;

    @GetMapping("/")
    public String main(Model model){
        model.addAttribute("cnt", cnt);
        return "index";
    }

    @GetMapping("/plus")
    public String plus(Model model){
        cnt++;
        model.addAttribute("cnt", cnt);
        return "index";
    }
    @GetMapping("/minus")
    public String minus(Model model){
        cnt--;
        model.addAttribute("cnt", cnt);
        return "index";
    }
}
