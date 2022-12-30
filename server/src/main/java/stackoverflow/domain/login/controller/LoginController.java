package stackoverflow.domain.login.controller;

import org.springframework.web.bind.annotation.*;
import stackoverflow.domain.login.dto.LoginDto;
import stackoverflow.domain.login.service.LoginService;
import stackoverflow.domain.member.entity.Member;

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
    public String login(@Valid @RequestBody LoginDto loginDto, HttpServletResponse response) {

        Member loginMember = loginService.login(loginDto.getEmail(), loginDto.getPassword());

        if (loginMember == null) {
            System.out.println("Login failed!");
            return "Login failed!";
        }

        System.out.println("Login successful!");
        return String.valueOf(loginMember.getMemberId());
    }

    // 서버에서 쿠키 제거
    @PostMapping("/users/logout")
    public String logout(HttpServletResponse response) {
        System.out.println("Logout successful!");
        return "Logout successful!";
    }

}
