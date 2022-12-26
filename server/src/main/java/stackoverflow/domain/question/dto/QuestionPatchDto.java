package stackoverflow.domain.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class QuestionPatchDto {
    private long questionId;

    public void setQuestionId(long questionId) {
        this.questionId = questionId;
    }

    private String title;

    private String content;
}
