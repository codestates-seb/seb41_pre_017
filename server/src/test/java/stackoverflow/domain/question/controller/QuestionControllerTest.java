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
import stackoverflow.domain.question.controller.QuestionController;
import stackoverflow.domain.question.dto.QuestionPatchDto;
import stackoverflow.domain.question.dto.QuestionPostDto;
import stackoverflow.domain.question.dto.QuestionResponseDto;
import stackoverflow.domain.question.entity.Question;
import stackoverflow.domain.question.mapper.QuestionMapper;
import stackoverflow.domain.question.service.QuestionService;

import java.util.List;

import static org.mockito.BDDMockito.given;
import static org.springframework.restdocs.headers.HeaderDocumentation.requestHeaders;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.patch;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.post;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.request.RequestDocumentation.parameterWithName;
import static org.springframework.restdocs.request.RequestDocumentation.pathParameters;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
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
        QuestionPostDto post = new QuestionPostDto();
        post.setTitle("제목입니다.");
        post.setContent("본문입니다.");
        String content = gson.toJson(post);
/*
        QuestionResponseDto response = new QuestionResponseDto();

        Question mockResultQuestion = new Question();
        mockResultQuestion.setQuestionId(1L);
        given(questionService.createQuestion(Mockito.any(Question.class))).willReturn(mockResultQuestion);

        given(mapper.questionToQuestionResponseDto(Mockito.any(Question.class))).willReturn(response);
 */

        // when
        ResultActions actions = mockMvc.perform(
                post("/questions")
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content)
        );

        // then
        actions.andExpect(status().isCreated())
                .andDo(document(
                        "post-question",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        requestFields(
                                List.of(
                                        fieldWithPath("title").type(JsonFieldType.STRING).description("제목"),
                                        fieldWithPath("content").type(JsonFieldType.STRING).description("본문")
                                )
                        )
                ));
    }

    @Test
    public void patchQuestionTest() throws Exception {
        // given
        long questionId = 1L;
        QuestionPatchDto patch = new QuestionPatchDto();
        patch.setQuestionId(1L);
        patch.setTitle("수정된 제목입니다.");
        patch.setContent("수정된 본문입니다.");
        String content = gson.toJson(patch);

        QuestionResponseDto response = new QuestionResponseDto();
        
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
                .andDo(document(
                        "patch-question",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(
                                parameterWithName("question-id").description("질문 번호")
                        ),
                        requestFields(
                                List.of(
                                        fieldWithPath("question-id").type(JsonFieldType.NUMBER).description("질문 번호").ignored(),
                                        fieldWithPath("title").type(JsonFieldType.STRING).description("제목").optional(),
                                        fieldWithPath("content").type(JsonFieldType.STRING).description("본문").optional()
                                )
                        )
                ));
    }
}
