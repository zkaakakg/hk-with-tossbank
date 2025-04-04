package com.study.springboot;

import org.springframework.web.bind.annotation.*;

//@RestController : @Controller + @ResponseBody
@RestController
//@Controller
//@ResponseBody  // 클래스의 모든 응답이 문자열(JSON)으로 선언됨.
@RequestMapping("/api/v1")  //모든 경로가 /api/v1 부터 시작됨.
public class ApiController {
    //http://localhost:8080/api/v1/hello
    @RequestMapping("/hello")
    public String hello(){
        return "API 서버 입니다.";
    }
    //클라 ----> 서버
    //    JSON ->   DTO 클래스 매핑
    //  <-JSON
    @PostMapping("/login")
    @ResponseBody

    public ResDto login(@RequestBody ReqDto reqdto){
        //Http 요청의 Body 데이터를 reqDto에 매핑한다.
        System.out.println("username = " + reqdto.getUsername());
        System.out.println("password = " + reqdto.getPassword());

        //DB에서 select해서 같은 id/pw 있으면 ok, 없으면 fail해야함

        ResDto resDto = new ResDto();
        resDto.setStatus("Ok");
        resDto.setMessage("로그인 성공!");

        return resDto; //HTTP 응답에 Body에 실어서 보낸다.
    }
}