package stackoverflow.domain.member.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
public class MemberPostDto {
    @NotBlank
    private String email;

    @NotBlank
    private String nickname;

    @NotBlank
    private String pwd;
}
