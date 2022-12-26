package stackoverflow.domain.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import stackoverflow.domain.member.entity.Member;
import stackoverflow.domain.question.entity.Question;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AnswerPostDto {
    @NotBlank
    private String content;

    @Positive
    private long questionId;

    @Positive
    private long memberId;

    public Question getQuestion() {
        Question question = new Question();
        question.setQuestionId(questionId);

        return question;
    }

    public Member getMember() {
        Member member = new Member();
        member.setMemberId(memberId);

        return member;
    }
}
