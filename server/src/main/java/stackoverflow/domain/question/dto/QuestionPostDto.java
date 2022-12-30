package stackoverflow.domain.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import stackoverflow.domain.member.entity.Member;

import javax.validation.constraints.NotBlank;

@Getter
@AllArgsConstructor
public class QuestionPostDto {
    @NotBlank
    private String title;

    @NotBlank
    private String content;

    private long memberId;

    public Member getMember() {
        Member member = new Member();
        member.setMemberId(memberId);
        return member;
    }
}
