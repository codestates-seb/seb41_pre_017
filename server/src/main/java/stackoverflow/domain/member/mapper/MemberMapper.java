package stackoverflow.domain.member.mapper;

import org.mapstruct.Mapper;
import stackoverflow.domain.member.dto.MemberPatchDto;
import stackoverflow.domain.member.dto.MemberPostDto;
import stackoverflow.domain.member.dto.MemberResponseDto;
import stackoverflow.domain.member.entity.Member;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member memberPostDtoToMember(MemberPostDto memberPostDto);
    Member memberPatchDtoToMember(MemberPatchDto memberPatchDto);
    MemberResponseDto memberToMemberResponseDto(Member member);
    List<MemberResponseDto> membersToMemberResponseDtos(List<Member> members);
}
