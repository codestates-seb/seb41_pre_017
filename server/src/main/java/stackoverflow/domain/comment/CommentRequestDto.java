package stackoverflow.domain.comment;

import lombok.Getter;

import javax.validation.constraints.NotBlank;

public class CommentRequestDto {
    @Getter
    static class Post {
        @NotBlank(message = "내용을 입력해주세요.")
        private String content;
    }

    @Getter
    static class Patch {
        private Long commentId;

        @NotBlank(message = "내용을 입력해주세요.")
        private String content;

        public void setCommentId(long commentId) {
            this.commentId = commentId;
        }
    }
}
