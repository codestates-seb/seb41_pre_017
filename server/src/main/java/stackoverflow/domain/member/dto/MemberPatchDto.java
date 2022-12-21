package stackoverflow.domain.member.dto;

import lombok.Getter;

@Getter
public class MemberPatchDto {
    private long memberId;

    public void setMemberId(long memberId) {
        this.memberId = memberId;
    }

    private String nickname;

    private String pwd;
}
