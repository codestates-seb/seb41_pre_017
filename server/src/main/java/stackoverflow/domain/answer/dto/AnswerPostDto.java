package stackoverflow.domain.answer.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.lang.Nullable;
import stackoverflow.domain.member.entity.Member;
import stackoverflow.domain.question.entity.Question;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class AnswerPostDto {
    @NotBlank
    private String content;

    private Long memberId;

    private Long questionId;

    public Member getMember() {
        Member member = new Member();
        member.setMemberId(memberId);

        return member;
    }

    public Question getQuestion() {
        Question question = new Question();
        question.setQuestionId(questionId);

        return question;
    }
}
