package com.study.springboot;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SecurityService implements UserDetailsService {

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{
        //사용자 아이디를 통해, 사용자 정보와 권한은 스프링 시큐리티에 전달해 주는 코드
        List<GrantedAuthority> authorities = new ArrayList<>();
        //테스트로  ADMIN 권한/열활을 넣어주자.
        authorities.add(new SimpleGrantedAuthority(UserRole.ADMIN.getValue()));
        //username(아이디) : "hong"
        //password(암호) : "1234" 문자열을 Bcrypt 사이트(bcrypt-generator.com)
        return new User("hong", "$2a$12$6VXIPv2S9KOGLXq5VpAR0eKlgYtVODClEenuwdJGPif5WuVeuuPS.", authorities);
    }
 }
