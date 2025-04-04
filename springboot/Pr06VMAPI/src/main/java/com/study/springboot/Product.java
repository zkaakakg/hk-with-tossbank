package com.study.springboot;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    private String name; // 상품명
    private int price; // 가격
    private LocalDate limit_date; // 유통기한
}