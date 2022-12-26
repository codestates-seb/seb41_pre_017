package stackoverflow.domain.member.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class MemberResponseDto {
    private long memberId;

    private String email;

    private String nickname;

    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;
}
