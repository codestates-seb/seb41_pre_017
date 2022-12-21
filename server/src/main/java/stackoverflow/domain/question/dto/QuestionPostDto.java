package stackoverflow.domain.question.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
public class QuestionPostDto {
    @NotBlank
    private String title;

    @NotBlank
    private String username; // TODO: 로그인 시 변경 or 제약조건 추가

    @NotBlank
    private String content;
}
