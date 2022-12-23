package stackoverflow.domain.question.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class QuestionPostDto {
    @NotBlank
    private String title;

    @NotBlank
    private String content;
}
