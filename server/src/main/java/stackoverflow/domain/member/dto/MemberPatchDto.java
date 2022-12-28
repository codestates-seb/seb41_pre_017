package stackoverflow.domain.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MemberPatchDto {
    private long memberId;

    public void setMemberId(long memberId) {
        this.memberId = memberId;
    }

    private String nickname;

    private String pwd;
}
