package stackoverflow.domain.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
@AllArgsConstructor
public class MemberPostDto {
    @NotBlank
    private String email;

    @NotBlank
    private String nickname;

    @NotBlank
    private String pwd;
}
