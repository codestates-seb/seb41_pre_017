package stackoverflow.domain.login.controller;

import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import stackoverflow.domain.login.dto.LoginDto;
import stackoverflow.domain.login.service.LoginService;
import stackoverflow.domain.member.entity.Member;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class LoginController {

    private final LoginService loginService;

    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    // 서버에서 쿠키 생성
    @PostMapping("/users/login")
    public String login(@Valid @RequestBody LoginDto loginDto, BindingResult bindingResult, HttpServletResponse response) {
//        if (bindingResult.hasErrors()) {
//            System.out.println("Login error occurred!");
//            return "Login error occurred!";
//        }

        Member loginMember = loginService.login(loginDto.getEmail(), loginDto.getPassword());

        if (loginMember == null) {
            System.out.println("Login failed!");
            return "Login failed!";

        }

        Cookie cookieId = new Cookie("memberId", String.valueOf(loginMember.getMemberId()));
        response.addCookie(cookieId);
        System.out.println("Cookie Info : " + cookieId);
        System.out.println("Login successful!");
        return "Login successful!";
    }

    // 서버에서 쿠키 제거
    @PostMapping("/users/logout")
    public String logout(HttpServletResponse response) {
        expiredCookie(response);
        System.out.println("Logout successful!");
        return "Logout successful!";
    }

    private void expiredCookie(HttpServletResponse response) {
        Cookie cookie = new Cookie("memberId", null);
        cookie.setMaxAge(0);
        response.addCookie(cookie);
    }
}
