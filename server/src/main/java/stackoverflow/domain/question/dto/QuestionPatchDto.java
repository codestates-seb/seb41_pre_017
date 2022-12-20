package stackoverflow.domain.question.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
public class QuestionPatchDto {
    private long questionId;

    public void setQuestionId(long questionId) {
        this.questionId = questionId;
    }

    private String title;

    private String content;
}
