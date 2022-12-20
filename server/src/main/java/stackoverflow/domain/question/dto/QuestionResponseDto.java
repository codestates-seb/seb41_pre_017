package stackoverflow.domain.question.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class QuestionResponseDto {
    private long questionId;

    private String title;

    private String username;

    private String content;

    private LocalDateTime createdAt;
}
