package com.study.springboot;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ApiController {
    @PostMapping("/calculator")
    @ResponseBody
    public ResDto calculator(@RequestBody ReqDto reqDto) {
        ResDto resDto = new ResDto();
        resDto.setStatus("ok");
        switch (reqDto.getOperator()) {
            case "+" -> resDto.setResult(reqDto.getNum1() + reqDto.getNum2());
            case "-" -> resDto.setResult(reqDto.getNum1() - reqDto.getNum2());
            case "*" -> resDto.setResult(reqDto.getNum1() * reqDto.getNum2());
            case "/" -> resDto.setResult(reqDto.getNum1() / reqDto.getNum2());
        }

        System.out.println(resDto.getResult());
        return resDto;
    }
}
