package stackoverflow.domain.comment.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CommentResponseDto {
    private Long commentId;
    private Long memberId;
    private Long answerId;
    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}
