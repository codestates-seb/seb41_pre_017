package stackoverflow.domain.answer.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class AnswerPatchDto {
    private long answerId;

    @NotBlank
    private String content;
    // 내용 추가 예정
}
