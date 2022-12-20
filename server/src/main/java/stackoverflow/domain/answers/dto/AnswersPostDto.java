package stackoverflow.domain.answers.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
@AllArgsConstructor
public class AnswersPostDto {
    @NotBlank
    private Long userId;
    private String contents;
}
