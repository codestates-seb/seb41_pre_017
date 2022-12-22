package stackoverflow.domain.comment.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class CommentResponseDto {
    private Long commentId;
    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}
