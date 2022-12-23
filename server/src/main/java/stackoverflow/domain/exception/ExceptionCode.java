package stackoverflow.domain.exception;

import lombok.Getter;

@Getter
public enum ExceptionCode {
    MEMBER_NOT_FOUND(404, "Member not found"),
    MEMBER_EXISTS(409, "Member exists"),
    MEMBER_RESIGNED(422, "Member resigned"),
    MEMBER_UNAUTHORIZED(403, "Member unauthorized"),
    QUESTION_NOT_FOUND(404, "Question not found"),
    ANSWER_NOT_FOUND(404,"Answer not found"),
    COMMENT_NOT_FOUND(404, "Comment not found");

    private final int status;
    private final String message;

    ExceptionCode(int statusCode, String message) {
        this.status = statusCode;
        this.message = message;
    }
}
