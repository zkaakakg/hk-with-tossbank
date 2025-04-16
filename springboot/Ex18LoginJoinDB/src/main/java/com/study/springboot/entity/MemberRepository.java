package com.study.springboot.entity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MemberRepository extends JpaRepository<MemberEntity,Long> {

    //사용자 정의 메소드(JPA 함수, JPQL, Na)
    Optional<MemberEntity> findByUserId(String userId);
    Optional<MemberEntity> findByUserIdAndUserPw(String userId, String userPw);

}
