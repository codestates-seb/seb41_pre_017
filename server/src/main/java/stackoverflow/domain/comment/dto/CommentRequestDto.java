package stackoverflow.domain.comment.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import stackoverflow.domain.answer.entity.Answer;
import stackoverflow.domain.member.entity.Member;
import stackoverflow.domain.question.entity.Question;

import javax.validation.constraints.NotBlank;

public class CommentRequestDto {
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Post {
        @NotBlank(message = "내용을 입력해주세요.")
        private String content;

        private Long memberId;

        private Long questionId;

        private Long answerId;

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

        public Answer getAnswer() {
            Answer answer = new Answer();
            answer.setAnswerId(answerId);

            return answer;
        }
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Patch {
        private Long commentId;

        @NotBlank(message = "내용을 입력해주세요.")
        private String content;

        public void setCommentId(long commentId) {
            this.commentId = commentId;
        }
    }
}
