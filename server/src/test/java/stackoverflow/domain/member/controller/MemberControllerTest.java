package stackoverflow.domain.member.controller;

import com.google.gson.Gson;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.http.MediaType;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import stackoverflow.domain.member.dto.MemberPatchDto;
import stackoverflow.domain.member.dto.MemberPostDto;
import stackoverflow.domain.member.dto.MemberResponseDto;
import stackoverflow.domain.member.entity.Member;
import stackoverflow.domain.member.mapper.MemberMapper;
import stackoverflow.domain.member.service.MemberService;

import java.time.LocalDateTime;
import java.util.List;

import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.doNothing;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.*;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.request.RequestDocumentation.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static stackoverflow.util.ApiDocumentUtils.getRequestPreProcessor;
import static stackoverflow.util.ApiDocumentUtils.getResponsePreProcessor;

@WebMvcTest(MemberController.class)
@MockBean(JpaMetamodelMappingContext.class)
@AutoConfigureRestDocs
public class MemberControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private Gson gson;

    @MockBean
    private MemberService memberService;

    @MockBean
    private MemberMapper mapper;

    @Test
    public void postMemberTest() throws Exception {
        // given
        MemberPostDto post = new MemberPostDto("example@gmail.com", "닉네임", "password123!@");
        String content = gson.toJson(post);

        MemberResponseDto response = new MemberResponseDto(1L, "example@gmail.com", "닉네임", LocalDateTime.now(), LocalDateTime.now());

        given(mapper.memberPostDtoToMember(Mockito.any(MemberPostDto.class))).willReturn(new Member());
        given(memberService.createMember(Mockito.any(Member.class))).willReturn(new Member());
        given(mapper.memberToMemberResponseDto(Mockito.any(Member.class))).willReturn(response);

        // when
        ResultActions actions = mockMvc.perform(
                post("/members")
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content)
        );

        // then
        actions.andExpect(status().isCreated())
                .andExpect(jsonPath("$.data.email").value(post.getEmail()))
                .andExpect(jsonPath("$.data.nickname").value(post.getNickname()))
                .andDo(document(
                        "post-member",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        requestFields(
                                List.of(
                                        fieldWithPath("email").type(JsonFieldType.STRING).description("이메일"),
                                        fieldWithPath("nickname").type(JsonFieldType.STRING).description("닉네임"),
                                        fieldWithPath("pwd").type(JsonFieldType.STRING).description("비밀번호")
                                )
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("data.memberId").type(JsonFieldType.NUMBER).description("회원 번호"),
                                        fieldWithPath("data.email").type(JsonFieldType.STRING).description("이메일"),
                                        fieldWithPath("data.nickname").type(JsonFieldType.STRING).description("닉네임"),
                                        fieldWithPath("data.createdAt").type(JsonFieldType.STRING).description("회원 가입 시간"),
                                        fieldWithPath("data.modifiedAt").type(JsonFieldType.STRING).description("최근 회원정보 수정 시간")
                                )
                        )
                ));
    }

    @Test
    public void patchMemberTest() throws Exception {
        // given
        long memberId = 1L;
        LocalDateTime createdAt = LocalDateTime.now();

        MemberPatchDto patch = new MemberPatchDto(memberId, "바뀐 닉네임", "newpwd11!!");
        String content = gson.toJson(patch);

        MemberResponseDto response = new MemberResponseDto(1L, "sample@gmail.com", "바뀐 닉네임", createdAt, LocalDateTime.now());

        given(mapper.memberPatchDtoToMember(Mockito.any(MemberPatchDto.class))).willReturn(new Member());
        given(memberService.updateMember(Mockito.any(Member.class))).willReturn(new Member());
        given(mapper.memberToMemberResponseDto(Mockito.any(Member.class))).willReturn(response);

        // when
        ResultActions actions = mockMvc.perform(
                patch("/members/{member-id}", memberId)
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content)
        );

        // then
        actions.andExpect(status().isOk())
                .andExpect(jsonPath("$.data.memberId").value(memberId))
                .andExpect(jsonPath("$.data.nickname").value(patch.getNickname()))
                .andDo(document(
                        "patch-member",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(
                                parameterWithName("member-id").description("정보 수정할 회원 번호")
                        ),
                        requestFields(
                                List.of(
                                        fieldWithPath("memberId").type(JsonFieldType.NUMBER).description("정보 수정할 회원 번호").ignored(),
                                        fieldWithPath("nickname").type(JsonFieldType.STRING).description("닉네임").optional(),
                                        fieldWithPath("pwd").type(JsonFieldType.STRING).description("본문").optional()
                                )
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("data.memberId").type(JsonFieldType.NUMBER).description("회원 번호"),
                                        fieldWithPath("data.email").type(JsonFieldType.STRING).description("이메일"),
                                        fieldWithPath("data.nickname").type(JsonFieldType.STRING).description("닉네임"),
                                        fieldWithPath("data.createdAt").type(JsonFieldType.STRING).description("회원 가입 시간"),
                                        fieldWithPath("data.modifiedAt").type(JsonFieldType.STRING).description("최근 회원정보 수정 시간")
                                )
                        )
                ));
    }

    @Test
    public void getMemberTest() throws Exception {
        // given
        long memberId = 1L;

        MemberResponseDto response = new MemberResponseDto(1L, "sample@gmail.com", "닉네임", LocalDateTime.now(), LocalDateTime.now());

        given(memberService.findMember(Mockito.anyLong())).willReturn(new Member());
        given(mapper.memberToMemberResponseDto(Mockito.any(Member.class))).willReturn(response);

        // when
        ResultActions actions = mockMvc.perform(
                get("/members/{member-id}", memberId)
                        .accept(MediaType.APPLICATION_JSON)
        );

        // then
        actions.andExpect(status().isOk())
                .andExpect(jsonPath("$.data.memberId").value(memberId))
                .andDo(document(
                        "get-member",
                        getResponsePreProcessor(),
                        pathParameters(
                                parameterWithName("member-id").description("조회한 회원 번호")
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("data.memberId").type(JsonFieldType.NUMBER).description("회원 번호"),
                                        fieldWithPath("data.email").type(JsonFieldType.STRING).description("이메일"),
                                        fieldWithPath("data.nickname").type(JsonFieldType.STRING).description("닉네임"),
                                        fieldWithPath("data.createdAt").type(JsonFieldType.STRING).description("회원 가입 시간"),
                                        fieldWithPath("data.modifiedAt").type(JsonFieldType.STRING).description("최근 회원정보 수정 시간")
                                )
                        )
                ));
    }

    @Test
    public void getMembersTest() throws Exception {
        // given
        int page = 2;
        int size = 3;

        List<MemberResponseDto> responses = List.of(
                new MemberResponseDto(1L, "sample1@gmail.com", "닉네임1", LocalDateTime.now(), LocalDateTime.now()),
                new MemberResponseDto(2L, "sample2@gmail.com", "닉네임2", LocalDateTime.now(), LocalDateTime.now()),
                new MemberResponseDto(3L, "sample3@gmail.com", "닉네임3", LocalDateTime.now(), LocalDateTime.now()),
                new MemberResponseDto(4L, "sample4@gmail.com", "닉네임4", LocalDateTime.now(), LocalDateTime.now()),
                new MemberResponseDto(5L, "sample5@gmail.com", "닉네임5", LocalDateTime.now(), LocalDateTime.now()),
                new MemberResponseDto(6L, "sample6@gmail.com", "닉네임6", LocalDateTime.now(), LocalDateTime.now()),
                new MemberResponseDto(7L, "sample7@gmail.com", "닉네임7", LocalDateTime.now(), LocalDateTime.now()),
                new MemberResponseDto(8L, "sample8@gmail.com", "닉네임8", LocalDateTime.now(), LocalDateTime.now()),
                new MemberResponseDto(9L, "sample9@gmail.com", "닉네임9", LocalDateTime.now(), LocalDateTime.now()),
                new MemberResponseDto(10L, "sample10@gmail.com", "닉네임10", LocalDateTime.now(), LocalDateTime.now())
        );

        given(memberService.findMembers(Mockito.anyInt(), Mockito.anyInt())).willReturn(new PageImpl<>(List.of()));
        given(mapper.membersToMemberResponseDtos(Mockito.anyList())).willReturn(responses);

        // when
        ResultActions actions = mockMvc.perform(
                get("/members?page={page}&size={size}", page, size)
                        .accept(MediaType.APPLICATION_JSON)
        );

        // then
        actions.andExpect(status().isOk())
                .andDo(document(
                        "get-members",
                        getResponsePreProcessor(),
                        requestParameters(
                                List.of(
                                        parameterWithName("page").description("페이지 번호"),
                                        parameterWithName("size").description("페이지 크기")
                                )
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("data[].memberId").type(JsonFieldType.NUMBER).description("회원 번호"),
                                        fieldWithPath("data[].email").type(JsonFieldType.STRING).description("이메일"),
                                        fieldWithPath("data[].nickname").type(JsonFieldType.STRING).description("닉네임"),
                                        fieldWithPath("data[].createdAt").type(JsonFieldType.STRING).description("회원 가입 시간"),
                                        fieldWithPath("data[].modifiedAt").type(JsonFieldType.STRING).description("최근 회원정보 수정 시간"),

                                        fieldWithPath("pageInfo").type(JsonFieldType.OBJECT).description("페이지 정보"),
                                        fieldWithPath("pageInfo.page").type(JsonFieldType.NUMBER).description("페이지 번호"),
                                        fieldWithPath("pageInfo.size").type(JsonFieldType.NUMBER).description("페이지 크기"),
                                        fieldWithPath("pageInfo.totalElements").type(JsonFieldType.NUMBER).description("총 갯수"),
                                        fieldWithPath("pageInfo.totalPages").type(JsonFieldType.NUMBER).description("총 페이지 수")
                                )
                        )
                ));
    }

    @Test
    public void deleteMemberTest() throws Exception {
        // given
        long memberId = 1L;

        doNothing().when(memberService).deleteMember(Mockito.anyLong());

        // when
        ResultActions actions = mockMvc.perform(
                delete("/members/{member-id}", memberId)
        );

        // then
        actions.andExpect(status().isNoContent())
                .andDo(document(
                        "delete-member",
                        pathParameters(
                                parameterWithName("member-id").description("탈퇴한 회원 번호")
                        )
                ));
    }
}
