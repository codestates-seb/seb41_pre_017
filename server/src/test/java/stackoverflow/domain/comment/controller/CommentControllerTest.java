package stackoverflow.domain.comment.controller;


import com.google.gson.Gson;
import com.jayway.jsonpath.JsonPath;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.http.MediaType;
import org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import stackoverflow.domain.answer.entity.Answer;
import stackoverflow.domain.comment.dto.CommentRequestDto;
import stackoverflow.domain.comment.dto.CommentResponseDto;
import stackoverflow.domain.comment.entity.Comment;
import stackoverflow.domain.comment.mapper.CommentMapper;
import stackoverflow.domain.comment.service.CommentService;
import stackoverflow.domain.member.entity.Member;
import stackoverflow.domain.question.entity.Question;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.doNothing;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.patch;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.post;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.*;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.request.RequestDocumentation.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static stackoverflow.util.ApiDocumentUtils.getRequestPreProcessor;
import static stackoverflow.util.ApiDocumentUtils.getResponsePreProcessor;

@WebMvcTest(CommentController.class)
@MockBean(JpaMetamodelMappingContext.class)
@AutoConfigureRestDocs
public class CommentControllerTest {
    // TODO question에 댓글다는 기능은 일단 제외 고려

    @MockBean
    private CommentService commentService;

    @MockBean
    private CommentMapper commentMapper;

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private Gson gson;

    @Test
    public void postCommentTest() throws Exception {
        // given
        CommentRequestDto.Post post = new CommentRequestDto.Post("comment1", 1L, 1L, 1L);
        String content = gson.toJson(post);

        CommentResponseDto response = new CommentResponseDto(1L, 1L, 1L, 1L, "comment1", LocalDateTime.now(), LocalDateTime.now());

        given(commentMapper.postDtoToComment(Mockito.any(CommentRequestDto.Post.class))).willReturn(new Comment());

        given(commentService.createComment(Mockito.any(Comment.class))).willReturn(new Comment());

        given(commentMapper.commentToResponseDto(Mockito.any(Comment.class))).willReturn(response);

        // when
        ResultActions actions =
                mockMvc.perform(
                        post("/comments")
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(content)
                );

        // then
        actions
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.data.content").value(post.getContent()))
                .andExpect(jsonPath("$.data.memberId").value(post.getMemberId()))
                .andExpect(jsonPath("$.data.questionId").value(post.getQuestionId()))
                .andExpect(jsonPath("$.data.answerId").value(post.getAnswerId()))
                .andDo(document("post-comment",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        requestFields(
                                List.of(
                                        fieldWithPath("content").type(JsonFieldType.STRING).description("내용"),
                                        fieldWithPath("memberId").type(JsonFieldType.NUMBER).description("회원 식별자"),
                                        fieldWithPath("questionId").type(JsonFieldType.NUMBER).description("질문 식별자"),
                                        fieldWithPath("answerId").type(JsonFieldType.NUMBER).description("답변 식별자")
                                )
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("data.commentId").type(JsonFieldType.NUMBER).description("댓글 식별자"),
                                        fieldWithPath("data.memberId").type(JsonFieldType.NUMBER).description("회원 식별자"),
                                        fieldWithPath("data.questionId").type(JsonFieldType.NUMBER).description("질문 식별자"),
                                        fieldWithPath("data.answerId").type(JsonFieldType.NUMBER).description("답변 식별자"),
                                        fieldWithPath("data.content").type(JsonFieldType.STRING).description("내용"),
                                        fieldWithPath("data.createdAt").type(JsonFieldType.STRING).description("추가된 시간"),
                                        fieldWithPath("data.modifiedAt").type(JsonFieldType.STRING).description("수정된 시간")
                                )
                        )
                ));
    }

    @Test
    public void patchCommentTest() throws Exception {
        // given
        CommentRequestDto.Patch patch =
                new CommentRequestDto.Patch(
                        1L,
                        "comment1");
        String content = gson.toJson(patch);

        CommentResponseDto response =
                new CommentResponseDto(
                        1L,
                        1L,
                        1L,
                        1L,
                        "comment1",
                        LocalDateTime.now(),
                        LocalDateTime.now());

        given(commentMapper.patchDtoToComment(Mockito.any(CommentRequestDto.Patch.class))).willReturn(new Comment());

        given(commentService.updateComment(Mockito.any(Comment.class))).willReturn(new Comment());

        given(commentMapper.commentToResponseDto(Mockito.any(Comment.class))).willReturn(response);

        // when
        ResultActions actions =
                mockMvc.perform(
                        patch("/comments/{comment-id}", patch.getCommentId())
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(content)
                );

        // then
        actions
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.data.commentId").value(patch.getCommentId()))
                .andExpect(jsonPath("$.data.content").value(patch.getContent()))
                .andDo(document("patch-comment",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(
                                parameterWithName("comment-id").description("댓글 식별자")
                        ),
                        requestFields(
                                List.of(
                                        fieldWithPath("commentId").type(JsonFieldType.NUMBER).description("댓글 식별자"),
                                        fieldWithPath("content").type(JsonFieldType.STRING).description("내용")
                                )
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("data.commentId").type(JsonFieldType.NUMBER).description("댓글 식별자"),
                                        fieldWithPath("data.memberId").type(JsonFieldType.NUMBER).description("회원 식별자"),
                                        fieldWithPath("data.questionId").type(JsonFieldType.NUMBER).description("질문 식별자"),
                                        fieldWithPath("data.answerId").type(JsonFieldType.NUMBER).description("답변 식별자"),
                                        fieldWithPath("data.content").type(JsonFieldType.STRING).description("내용"),
                                        fieldWithPath("data.createdAt").type(JsonFieldType.STRING).description("추가된 시간"),
                                        fieldWithPath("data.modifiedAt").type(JsonFieldType.STRING).description("수정된 시간")
                                )
                        )
                ));
    }

    @Test
    public void getCommentsTest() throws Exception {
        // given
        String page = "1";
        String size = "10";

        MultiValueMap<String, String> queryParams = new LinkedMultiValueMap<>();
        queryParams.add("page", page);
        queryParams.add("size", size);


        Comment comment1 = new Comment();
        comment1.setCommentId(1L);
        comment1.setQuestion(new Question());
        comment1.setMember(new Member());
        comment1.setAnswer(new Answer());
        comment1.setContent("comment1");

        Comment comment2 = new Comment();
        comment2.setCommentId(2L);
        comment2.setQuestion(new Question());
        comment2.setMember(new Member());
        comment2.setAnswer(new Answer());
        comment2.setContent("comment2");

        Page<Comment> comments = new PageImpl<>(List.of(comment1, comment2),
                PageRequest.of(0, 10, Sort.by("commentId").descending()), 2);

        CommentResponseDto response1 =
                new CommentResponseDto(
                        1L,
                        1L,
                        1L,
                        1L,
                        "comment1",
                        LocalDateTime.now(),
                        LocalDateTime.now());

        CommentResponseDto response2 =
                new CommentResponseDto(
                        2L,
                        1L,
                        1L,
                        1L,
                        "comment2",
                        LocalDateTime.now(),
                        LocalDateTime.now());

        List<CommentResponseDto> responses = List.of(response1, response2);

        given(commentService.findComments(Mockito.anyInt(), Mockito.anyInt())).willReturn(comments);
        given(commentMapper.commentToResponseDtos(Mockito.anyList())).willReturn(responses);

        // when
        ResultActions actions = mockMvc.perform(
                RestDocumentationRequestBuilders.get("/comments")
                        .params(queryParams)
                        .accept(MediaType.APPLICATION_JSON));

        // then
        MvcResult result =
                actions
                        .andExpect(status().isOk())
                        .andDo(
                                document(
                                        "get-comments",
                                        preprocessRequest(prettyPrint()),
                                        preprocessResponse(prettyPrint()),
                                        requestParameters(
                                                List.of(
                                                        parameterWithName("page").description("페이지 번호"),
                                                        parameterWithName("size").description("페이지 사이즈")
                                                )
                                        ),
                                        responseFields(
                                                Arrays.asList(
                                                        fieldWithPath("data[].commentId").type(JsonFieldType.NUMBER).description("댓글 식별자"),
                                                        fieldWithPath("data[].memberId").type(JsonFieldType.NUMBER).description("회원 식별자"),
                                                        fieldWithPath("data[].questionId").type(JsonFieldType.NUMBER).description("질문 식별자"),
                                                        fieldWithPath("data[].answerId").type(JsonFieldType.NUMBER).description("답변 식별자"),
                                                        fieldWithPath("data[].content").type(JsonFieldType.STRING).description("내용"),
                                                        fieldWithPath("data[].createdAt").type(JsonFieldType.STRING).description("추가된 시간"),
                                                        fieldWithPath("data[].modifiedAt").type(JsonFieldType.STRING).description("수정된 시간"),
                                                        fieldWithPath("pageInfo").type(JsonFieldType.OBJECT).description("페이지 정보"),
                                                        fieldWithPath("pageInfo.page").type(JsonFieldType.NUMBER).description("페이지 번호"),
                                                        fieldWithPath("pageInfo.size").type(JsonFieldType.NUMBER).description("페이지 사이즈"),
                                                        fieldWithPath("pageInfo.totalElements").type(JsonFieldType.NUMBER).description("전체 건 수"),
                                                        fieldWithPath("pageInfo.totalPages").type(JsonFieldType.NUMBER).description("전체 페이지 수")
                                                )
                                        )
                                )
                        )
                        .andReturn();

        List list = JsonPath.parse(result.getResponse().getContentAsString()).read("$.data");
        assertThat(list.size(), is(2));
    }

    @Test
    public void getCommentTest() throws Exception {
        // given
        long commentId = 1L;
        CommentResponseDto response = new CommentResponseDto(1L, 1L, 1L, 1L, "아주 훌륭해요!", LocalDateTime.now(), LocalDateTime.now());

        given(commentService.findComment(Mockito.anyLong())).willReturn(new Comment());
        given(commentMapper.commentToResponseDto(Mockito.any(Comment.class))).willReturn(response);

        // when
        ResultActions actions = mockMvc.perform(
                RestDocumentationRequestBuilders.get("/comments/{comment-id}", commentId)
                        .accept(MediaType.APPLICATION_JSON));

        // then
        actions
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.data.commentId").value(commentId))
                .andExpect(jsonPath("$.data.content").value(response.getContent()))
                .andDo(
                        document("get-comment",
                                preprocessRequest(prettyPrint()),
                                preprocessResponse(prettyPrint()),
                                pathParameters(
                                        List.of(parameterWithName("comment-id").description("댓글 식별자"))
                                ),
                                responseFields(
                                        Arrays.asList(
                                                fieldWithPath("data.commentId").type(JsonFieldType.NUMBER).description("댓글 식별자"),
                                                fieldWithPath("data.memberId").type(JsonFieldType.NUMBER).description("회원 식별자"),
                                                fieldWithPath("data.questionId").type(JsonFieldType.NUMBER).description("질문 식별자"),
                                                fieldWithPath("data.answerId").type(JsonFieldType.NUMBER).description("답변 식별자"),
                                                fieldWithPath("data.content").type(JsonFieldType.STRING).description("내용"),
                                                fieldWithPath("data.createdAt").type(JsonFieldType.STRING).description("추가된 시간"),
                                                fieldWithPath("data.modifiedAt").type(JsonFieldType.STRING).description("수정된 시간")
                                        )
                                )
                        ));
    }

    @Test
    public void deleteCommentTest() throws Exception {
        // given
        long commentId = 1L;
        doNothing().when(commentService).deleteComment(Mockito.anyLong());

        // when
        ResultActions actions = mockMvc.perform(
                RestDocumentationRequestBuilders
                        .delete("/comments/{comment-id}", commentId));
        // then
        actions.andExpect(status().isNoContent())
                .andDo(
                        document(
                                "delete-comment",
                                preprocessRequest(prettyPrint()),
                                preprocessResponse(prettyPrint()),
                                pathParameters(
                                        List.of(parameterWithName("comment-id").description("댓글 식별자"))
                                )
                        )
                );
    }
}
