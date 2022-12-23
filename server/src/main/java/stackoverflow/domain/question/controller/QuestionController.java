package stackoverflow.domain.question.controller;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import stackoverflow.domain.question.dto.QuestionPatchDto;
import stackoverflow.domain.question.dto.QuestionPostDto;
import stackoverflow.domain.question.dto.QuestionResponseDto;
import stackoverflow.domain.question.entity.Question;
import stackoverflow.domain.question.mapper.QuestionMapper;
import stackoverflow.domain.question.service.QuestionService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping(value = "questions")
@Validated
public class QuestionController {
    private final QuestionService questionService;
    private final QuestionMapper mapper;

    public QuestionController(QuestionService questionService, QuestionMapper mapper) {
        this.questionService = questionService;
        this.mapper = mapper;
    }

    // 질문 등록
    @PostMapping
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionPostDto questionPostDto) {
        Question question = mapper.questionPostDtoToQuestion(questionPostDto);

        Question response = questionService.createQuestion(question);

        return new ResponseEntity<>(mapper.questionToQuestionResponseDto(response), HttpStatus.CREATED);
    }

    // 특정 질문 조회(검색)
    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") @Positive long questionId) {
        Question response = questionService.findQuestion(questionId);

        return new ResponseEntity<>(mapper.questionToQuestionResponseDto(response), HttpStatus.OK);
    }

    // 모든 질문 리스트 조회
    @GetMapping
    public ResponseEntity getQuestions(@RequestParam @Positive int page,
                                       @RequestParam @Positive int size) {
        // Pagination
        Page<Question> pageQuestions = questionService.findQuestions(page, size);

        List<Question> questions = pageQuestions.getContent();

        List<QuestionResponseDto> response = mapper.questionsToQuestionResponseDtos(questions);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // 특정 질문 업데이트(수정)
    @PatchMapping("/{question-id}")
    public ResponseEntity patchQuestion(@PathVariable("question-id") @Positive long questionId,
                                        @Valid @RequestBody QuestionPatchDto questionPatchDto) {
        // TODO: 수정 시 로그인 필요

        questionPatchDto.setQuestionId(questionId);

        Question question = mapper.questionPatchDtoToQuestion(questionPatchDto);

        Question response = questionService.updateQuestion(question);

        return new ResponseEntity<>(mapper.questionToQuestionResponseDto(response), HttpStatus.OK);
    }

    // 특정 질문 삭제
    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive long questionId) {
        // TODO: 삭제 시 로그인 필요

        questionService.deleteQuestion(questionId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

}
