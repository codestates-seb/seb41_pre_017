package stackoverflow.domain.question.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
public class QuestionPostDto {
    @NotBlank
    private String title;

    @NotBlank
    private String content;
}
