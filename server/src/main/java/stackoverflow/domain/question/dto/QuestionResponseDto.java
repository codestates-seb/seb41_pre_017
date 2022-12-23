package stackoverflow.domain.question.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class QuestionResponseDto {
    private long questionId;

    private long memberId;

    private String title;

    private String content;

    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;
}
