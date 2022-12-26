package stackoverflow.domain.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AnswerResponseDto {
    private long answerId;
    private String content;
    private long memberId;
    private long questionId;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}
