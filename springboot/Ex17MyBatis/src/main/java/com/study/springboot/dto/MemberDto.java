package com.study.springboot.dto;

import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MemberDto { //DB 필드와 1:1로 매칭
    private Long id;
    private String userId;
    private String userPw;
    private String userName;
    private String userRole;
    @DateTimeFormat(pattern="yyyy-mm-dd")
    private LocalDate joinDate;
}
