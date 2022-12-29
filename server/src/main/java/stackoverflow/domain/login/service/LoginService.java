package stackoverflow.domain.login.service;

import org.springframework.stereotype.Service;
import stackoverflow.domain.member.entity.Member;
import stackoverflow.domain.member.repository.MemberRepository;

import java.util.Optional;

@Service
public class LoginService {
    private final MemberRepository memberRepository;

    public LoginService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public Member login(String email, String password) {
        Optional<Member> findOptionalMember = memberRepository.findByEmail(email);
        Member member = findOptionalMember.get();

        if (member.getPwd().equals(password)) {
            return member;
        } else {
            return null;
        }
    }
}
