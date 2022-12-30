package stackoverflow.domain.question.controller;

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
import stackoverflow.domain.question.dto.QuestionPatchDto;
import stackoverflow.domain.question.dto.QuestionPostDto;
import stackoverflow.domain.question.dto.QuestionResponseDto;
import stackoverflow.domain.question.entity.Question;
import stackoverflow.domain.question.mapper.QuestionMapper;
import stackoverflow.domain.question.service.QuestionService;

import java.time.LocalDateTime;
import java.util.List;

import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.doNothing;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.*;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.request.RequestDocumentation.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static stackoverflow.util.ApiDocumentUtils.getRequestPreProcessor;
import static stackoverflow.util.ApiDocumentUtils.getResponsePreProcessor;

@WebMvcTest(QuestionController.class)
@MockBean(JpaMetamodelMappingContext.class)
@AutoConfigureRestDocs
public class QuestionControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private Gson gson;

    @MockBean
    private QuestionService questionService;

    @MockBean
    private QuestionMapper mapper;

    @Test
    public void postQuestionTest() throws Exception {
        // given
        QuestionPostDto post = new QuestionPostDto("제목입니다.","본문입니다.", 1L);
        String content = gson.toJson(post);

        QuestionResponseDto response = new QuestionResponseDto(1L, 1L, "nickname1","제목입니다.", "본문입니다.", LocalDateTime.now(), LocalDateTime.now());

        given(mapper.questionPostDtoToQuestion(Mockito.any(QuestionPostDto.class))).willReturn(new Question());
        given(questionService.createQuestion(Mockito.any(Question.class))).willReturn(new Question());
        given(mapper.questionToQuestionResponseDto(Mockito.any(Question.class))).willReturn(response);

        // when
        ResultActions actions = mockMvc.perform(
                post("/questions")
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content)
        );

        // then
        actions.andExpect(status().isCreated())
                .andExpect(jsonPath("$.data.title").value(post.getTitle()))
                .andExpect(jsonPath("$.data.content").value(post.getContent()))
                .andExpect(jsonPath("$.data.memberId").value(post.getMemberId()))
                .andDo(document(
                        "post-question",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        requestFields(
                                List.of(
                                        fieldWithPath("title").type(JsonFieldType.STRING).description("제목"),
                                        fieldWithPath("content").type(JsonFieldType.STRING).description("본문"),
                                        fieldWithPath("memberId").type(JsonFieldType.NUMBER).description("작성자 회원 번호")
                                )
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("data").type(JsonFieldType.OBJECT).description("결과 데이터").optional(),
                                        fieldWithPath("data.questionId").type(JsonFieldType.NUMBER).description("질문 번호"),
                                        fieldWithPath("data.memberId").type(JsonFieldType.NUMBER).description("작성자 회원 번호"),
                                        fieldWithPath("data.nickname").type(JsonFieldType.STRING).description("작성자 회원 닉네임"),
                                        fieldWithPath("data.title").type(JsonFieldType.STRING).description("제목"),
                                        fieldWithPath("data.content").type(JsonFieldType.STRING).description("본문"),
                                        fieldWithPath("data.createdAt").type(JsonFieldType.STRING).description("최초 생성 시간"),
                                        fieldWithPath("data.modifiedAt").type(JsonFieldType.STRING).description("최종 수정 시간")
                                )
                        )
                ));
    }

    @Test
    public void patchQuestionTest() throws Exception {
        // given
        long questionId = 1L;
        LocalDateTime createdAt = LocalDateTime.now();

        QuestionPatchDto patch = new QuestionPatchDto(questionId, "수정한 제목입니다.","수정한 본문입니다.");
        String content = gson.toJson(patch);

        QuestionResponseDto response = new QuestionResponseDto(1L, 1L, "nickname1","수정한 제목입니다.", "수정한 본문입니다.", createdAt, LocalDateTime.now());

        given(mapper.questionPatchDtoToQuestion(Mockito.any(QuestionPatchDto.class))).willReturn(new Question());
        given(questionService.updateQuestion(Mockito.any(Question.class))).willReturn(new Question());
        given(mapper.questionToQuestionResponseDto(Mockito.any(Question.class))).willReturn(response);

        // when
        ResultActions actions = mockMvc.perform(
                patch("/questions/{question-id}", questionId)
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content)
        );

        // then
        actions.andExpect(status().isOk())
                .andExpect(jsonPath("$.data.questionId").value(questionId))
                .andExpect(jsonPath("$.data.title").value(patch.getTitle()))
                .andExpect(jsonPath("$.data.content").value(patch.getContent()))
                .andDo(document(
                        "patch-question",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(
                                parameterWithName("question-id").description("수정한 질문 번호")
                        ),
                        requestFields(
                                List.of(
                                        fieldWithPath("questionId").type(JsonFieldType.NUMBER).description("수정한 질문 번호").ignored(),
                                        fieldWithPath("title").type(JsonFieldType.STRING).description("제목").optional(),
                                        fieldWithPath("content").type(JsonFieldType.STRING).description("본문").optional()
                                )
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("data").type(JsonFieldType.OBJECT).description("결과 데이터").optional(),
                                        fieldWithPath("data.questionId").type(JsonFieldType.NUMBER).description("질문 번호"),
                                        fieldWithPath("data.memberId").type(JsonFieldType.NUMBER).description("작성자 회원 번호"),
                                        fieldWithPath("data.nickname").type(JsonFieldType.STRING).description("작성자 회원 닉네임"),
                                        fieldWithPath("data.title").type(JsonFieldType.STRING).description("제목"),
                                        fieldWithPath("data.content").type(JsonFieldType.STRING).description("본문"),
                                        fieldWithPath("data.createdAt").type(JsonFieldType.STRING).description("최초 생성 시간"),
                                        fieldWithPath("data.modifiedAt").type(JsonFieldType.STRING).description("최종 수정 시간")
                                )
                        )
                ));
    }

    @Test
    public void getQuestionTest() throws Exception {
        // given
        long questionId = 1L;

        QuestionResponseDto response = new QuestionResponseDto(1L, 1L,"nickname1","조회한 질문의 제목", "조회한 질문의 본문", LocalDateTime.now(), LocalDateTime.now());

        given(questionService.findQuestion(Mockito.anyLong())).willReturn(new Question());
        given(mapper.questionToQuestionResponseDto(Mockito.any(Question.class))).willReturn(response);

        // when
        ResultActions actions = mockMvc.perform(
                get("/questions/{question-id}", questionId)
                        .accept(MediaType.APPLICATION_JSON)
        );

        // then
        actions.andExpect(status().isOk())
                .andExpect(jsonPath("$.data.questionId").value(questionId))
                .andDo(document(
                        "get-question",
                        getResponsePreProcessor(),
                        pathParameters(
                                parameterWithName("question-id").description("조회한 질문 번호")
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("data").type(JsonFieldType.OBJECT).description("결과 데이터").optional(),
                                        fieldWithPath("data.questionId").type(JsonFieldType.NUMBER).description("질문 번호"),
                                        fieldWithPath("data.memberId").type(JsonFieldType.NUMBER).description("작성자 회원 번호"),
                                        fieldWithPath("data.nickname").type(JsonFieldType.STRING).description("작성자 회원 닉네임"),
                                        fieldWithPath("data.title").type(JsonFieldType.STRING).description("제목"),
                                        fieldWithPath("data.content").type(JsonFieldType.STRING).description("본문"),
                                        fieldWithPath("data.createdAt").type(JsonFieldType.STRING).description("최초 생성 시간"),
                                        fieldWithPath("data.modifiedAt").type(JsonFieldType.STRING).description("최종 수정 시간")
                                )
                        )
                ));
    }

    @Test
    public void getQuestionsTest() throws Exception {
        // given
        int page = 2;
        int size = 3;

        List<QuestionResponseDto> responses = List.of(
                new QuestionResponseDto(1L, 1L,"nickname1","제목1", "본문1", LocalDateTime.now(), LocalDateTime.now()),
                new QuestionResponseDto(2L, 2L,"nickname2","제목2", "본문2", LocalDateTime.now(), LocalDateTime.now()),
                new QuestionResponseDto(3L, 3L,"nickname3","제목3", "본문3", LocalDateTime.now(), LocalDateTime.now()),
                new QuestionResponseDto(4L, 1L,"nickname1","제목4", "본문4", LocalDateTime.now(), LocalDateTime.now()),
                new QuestionResponseDto(5L, 4L,"nickname4","제목5", "본문5", LocalDateTime.now(), LocalDateTime.now()),
                new QuestionResponseDto(6L, 1L,"nickname1","제목6", "본문6", LocalDateTime.now(), LocalDateTime.now()),
                new QuestionResponseDto(7L, 5L,"nickname5","제목7", "본문7", LocalDateTime.now(), LocalDateTime.now()),
                new QuestionResponseDto(8L, 3L,"nickname3","제목8", "본문8", LocalDateTime.now(), LocalDateTime.now()),
                new QuestionResponseDto(9L, 6L,"nickname6","제목9", "본문9", LocalDateTime.now(), LocalDateTime.now()),
                new QuestionResponseDto(10L, 7L,"nickname7","제목10", "본문10", LocalDateTime.now(), LocalDateTime.now())
        );

        given(questionService.findQuestions(Mockito.anyInt(), Mockito.anyInt())).willReturn(new PageImpl<>(List.of()));
        given(mapper.questionsToQuestionResponseDtos(Mockito.anyList())).willReturn(responses);

        // when
        ResultActions actions = mockMvc.perform(
                get("/questions?page={page}&size={size}", page, size)
                        .accept(MediaType.APPLICATION_JSON)
        );

        // then
        actions.andExpect(status().isOk())
                .andDo(document(
                        "get-questions",
                        getResponsePreProcessor(),
                        requestParameters(
                                List.of(
                                        parameterWithName("page").description("페이지 번호"),
                                        parameterWithName("size").description("페이지 크기")
                                )
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("data").type(JsonFieldType.ARRAY).description("결과 데이터").optional(),
                                        fieldWithPath("data[].questionId").type(JsonFieldType.NUMBER).description("질문 번호"),
                                        fieldWithPath("data[].memberId").type(JsonFieldType.NUMBER).description("작성자 회원 번호"),
                                        fieldWithPath("data[].nickname").type(JsonFieldType.STRING).description("작성자 회원 닉네임"),
                                        fieldWithPath("data[].title").type(JsonFieldType.STRING).description("제목"),
                                        fieldWithPath("data[].content").type(JsonFieldType.STRING).description("본문"),
                                        fieldWithPath("data[].createdAt").type(JsonFieldType.STRING).description("최초 생성 시간"),
                                        fieldWithPath("data[].modifiedAt").type(JsonFieldType.STRING).description("최종 수정 시간"),

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
    public void deleteQuestionTest() throws Exception {
        // given
        long questionId = 1L;

        doNothing().when(questionService).deleteQuestion(Mockito.anyLong());

        // when
        ResultActions actions = mockMvc.perform(
                delete("/questions/{question-id}", questionId)
        );

        // then
        actions.andExpect(status().isNoContent())
                .andDo(document(
                        "delete-question",
                        pathParameters(
                                parameterWithName("question-id").description("삭제한 질문 번호")
                        )
                ));
    }
}
