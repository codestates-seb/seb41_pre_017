package stackoverflow.domain.answer.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class AnswerPostDto {
    @NotBlank
    private String content;
}
