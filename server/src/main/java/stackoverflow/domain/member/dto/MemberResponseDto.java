package stackoverflow.domain.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MemberResponseDto {
    private long memberId;

    private String email;

    private String nickname;

    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;
}
