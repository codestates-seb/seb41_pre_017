package stackoverflow.domain.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class MemberPatchDto {
    private long memberId;

    public void setMemberId(long memberId) {
        this.memberId = memberId;
    }

    private String nickname;

    private String pwd;
}
