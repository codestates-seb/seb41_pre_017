package stackoverflow.domain.question.controller;

import com.google.gson.Gson;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
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
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.*;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.request.RequestDocumentation.parameterWithName;
import static org.springframework.restdocs.request.RequestDocumentation.pathParameters;
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

        QuestionResponseDto response = new QuestionResponseDto(1L, 1L,"제목입니다.", "본문입니다.", LocalDateTime.now(), LocalDateTime.now());

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
                .andExpect(jsonPath("$.title").value(post.getTitle()))
                .andExpect(jsonPath("$.content").value(post.getContent()))
                .andExpect(jsonPath("$.memberId").value(post.getMemberId()))
                .andDo(document(
                        "post-question",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        requestFields(
                                List.of(
                                        fieldWithPath("title").type(JsonFieldType.STRING).description("제목"),
                                        fieldWithPath("content").type(JsonFieldType.STRING).description("본문"),
                                        fieldWithPath("memberId").type(JsonFieldType.NUMBER).description("회원 번호")
                                )
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("questionId").type(JsonFieldType.NUMBER).description("질문 번호"),
                                        fieldWithPath("memberId").type(JsonFieldType.NUMBER).description("회원 번호"),
                                        fieldWithPath("title").type(JsonFieldType.STRING).description("제목"),
                                        fieldWithPath("content").type(JsonFieldType.STRING).description("본문"),
                                        fieldWithPath("createdAt").type(JsonFieldType.STRING).description("생성 날짜"),
                                        fieldWithPath("modifiedAt").type(JsonFieldType.STRING).description("수정 날짜")
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

        QuestionResponseDto response = new QuestionResponseDto(1L, 1L,"수정한 제목입니다.", "수정한 본문입니다.", createdAt, LocalDateTime.now());

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
                .andExpect(jsonPath("$.questionId").value(questionId))
                .andExpect(jsonPath("$.title").value(patch.getTitle()))
                .andExpect(jsonPath("$.content").value(patch.getContent()))
                .andDo(document(
                        "patch-question",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(
                                parameterWithName("question-id").description("질문 번호")
                        ),
                        requestFields(
                                List.of(
                                        fieldWithPath("questionId").type(JsonFieldType.NUMBER).description("질문 번호").ignored(),
                                        fieldWithPath("title").type(JsonFieldType.STRING).description("제목").optional(),
                                        fieldWithPath("content").type(JsonFieldType.STRING).description("본문").optional()
                                )
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("questionId").type(JsonFieldType.NUMBER).description("질문 번호"),
                                        fieldWithPath("memberId").type(JsonFieldType.NUMBER).description("회원 번호"),
                                        fieldWithPath("title").type(JsonFieldType.STRING).description("제목"),
                                        fieldWithPath("content").type(JsonFieldType.STRING).description("본문"),
                                        fieldWithPath("createdAt").type(JsonFieldType.STRING).description("생성 날짜"),
                                        fieldWithPath("modifiedAt").type(JsonFieldType.STRING).description("수정 날짜")
                                )
                        )
                ));
    }

    @Test
    public void getQuestionTest() throws Exception {
        // given
        long questionId = 1L;

        QuestionResponseDto response = new QuestionResponseDto(1L, 1L,"조회한 질문의 제목", "조회한 질문의 본문", LocalDateTime.now(), LocalDateTime.now());

        given(questionService.findQuestion(Mockito.anyLong())).willReturn(new Question());
        given(mapper.questionToQuestionResponseDto(Mockito.any(Question.class))).willReturn(response);

        // when
        ResultActions actions = mockMvc.perform(
                get("/questions/{question-id}", questionId)
                        .accept(MediaType.APPLICATION_JSON)
        );

        // then
        actions.andExpect(status().isOk())
                .andExpect(jsonPath("$.questionId").value(questionId))
                .andDo(document(
                        "get-question",
                        getResponsePreProcessor(),
                        pathParameters(
                                parameterWithName("question-id").description("질문 번호")
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("questionId").type(JsonFieldType.NUMBER).description("질문 번호"),
                                        fieldWithPath("memberId").type(JsonFieldType.NUMBER).description("회원 번호"),
                                        fieldWithPath("title").type(JsonFieldType.STRING).description("제목"),
                                        fieldWithPath("content").type(JsonFieldType.STRING).description("본문"),
                                        fieldWithPath("createdAt").type(JsonFieldType.STRING).description("생성 날짜"),
                                        fieldWithPath("modifiedAt").type(JsonFieldType.STRING).description("수정 날짜")
                                )
                        )
                ));
    }
}
