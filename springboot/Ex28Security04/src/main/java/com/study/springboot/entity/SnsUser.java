package com.study.springboot.entity;

import com.study.springboot.enumeration.UserRole;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
@Table(name = "sns_user")
public class SnsUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private String email;
    @Column
    private String picture;

    @Enumerated(EnumType.STRING)
    @Column(name = "user_role", nullable = false)
    private UserRole role;

    @Builder
    public SnsUser(String name, String email, String picture, UserRole role){
        this.name=name;
        this.email=email;
        this.picture=picture;
        this.role=role;
    }

    public SnsUser update(String naem, String picture){
        this.name=naem;
        this.picture=picture;
        return this;
    }

    public String getRoleKey(){
        return this.role.getValue();
    }
}
