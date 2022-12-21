package stackoverflow.domain.member.controller;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import stackoverflow.domain.member.dto.MemberPatchDto;
import stackoverflow.domain.member.dto.MemberPostDto;
import stackoverflow.domain.member.dto.MemberResponseDto;
import stackoverflow.domain.member.entity.Member;
import stackoverflow.domain.member.mapper.MemberMapper;
import stackoverflow.domain.member.service.MemberService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping(value = "members")
@Validated
public class MemberController {
    private final MemberService memberService;
    private final MemberMapper mapper;

    public MemberController(MemberService memberService, MemberMapper mapper) {
        this.memberService = memberService;
        this.mapper = mapper;
    }

    // 회원 가입
    @PostMapping
    public ResponseEntity postMember(@Valid @RequestBody MemberPostDto memberPostDto) {
        Member member = mapper.memberPostDtoToMember(memberPostDto);

        Member response = memberService.createMember(member);

        return new ResponseEntity<>(mapper.memberToMemberResponseDto(response), HttpStatus.CREATED);
    }

    // 회원 정보 조회
    @GetMapping("/{member-id}")
    public ResponseEntity getMember(@PathVariable("member-id") @Positive long memberId) {
        Member response = memberService.findMember(memberId);

        return new ResponseEntity<>(mapper.memberToMemberResponseDto(response), HttpStatus.OK);
    }

    // 모든 회원 조회
    @GetMapping
    public ResponseEntity getMembers(@RequestParam @Positive int page,
                                   @RequestParam @Positive int size) {
        // Pagination
        Page<Member> pageMembers = memberService.findMembers(page, size);

        List<Member> members = pageMembers.getContent();

        List<MemberResponseDto> response = mapper.membersToMemberResponseDtos(members);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // 특정 회원 정보 수정
    @PatchMapping("/{member-id}/edit")
    public ResponseEntity patchMember(@PathVariable("member-id") @Positive long memberId,
                                    @Valid @RequestBody MemberPatchDto memberPatchDto) {

        memberPatchDto.setMemberId(memberId);

        Member member = mapper.memberPatchDtoToMember(memberPatchDto);

        Member response = memberService.updateMember(member);

        return new ResponseEntity<>(mapper.memberToMemberResponseDto(response), HttpStatus.OK);
    }

    // 특정 회원 탈퇴
    @DeleteMapping("/{member-id}")
    public ResponseEntity deleteMember(@PathVariable("member-id") @Positive long memberId) {
        // TODO: 데이터 삭제가 아닌 숨김(휴면) 상태로 변경

        memberService.deleteMember(memberId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
