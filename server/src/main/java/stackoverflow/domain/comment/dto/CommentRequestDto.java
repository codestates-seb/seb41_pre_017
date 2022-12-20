package stackoverflow.domain.comment.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;

public class CommentRequestDto {
    @Getter
    public static class Post {
        @NotBlank(message = "내용을 입력해주세요.")
        private String content;
    }

    @Getter
    public static class Patch {
        private Long commentId;

        @NotBlank(message = "내용을 입력해주세요.")
        private String content;

        public void setCommentId(long commentId) {
            this.commentId = commentId;
        }
    }
}
