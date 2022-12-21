package stackoverflow.domain.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
public class AnswerResponseDto {
    private long answerId;
    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}
