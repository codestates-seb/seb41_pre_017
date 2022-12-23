package stackoverflow.domain.question.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class QuestionPatchDto {
    private long questionId;

    public void setQuestionId(long questionId) {
        this.questionId = questionId;
    }

    private String title;

    private String content;
}
