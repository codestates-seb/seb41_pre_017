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
import stackoverflow.global.dto.MultiResponseDto;
import stackoverflow.global.dto.SingleResponseDto;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;


@RestController
@RequestMapping(value = "questions")
@Validated
@CrossOrigin(origins = "*", allowedHeaders = "*")
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
        Question question = questionService.createQuestion(mapper.questionPostDtoToQuestion(questionPostDto));

        QuestionResponseDto response = mapper.questionToQuestionResponseDto(question);

        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.CREATED);
    }

    // 특정 질문 조회(검색)
    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") @Positive long questionId) {
        Question question = questionService.findQuestion(questionId);

        QuestionResponseDto response = mapper.questionToQuestionResponseDto(question);

        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    // 모든 질문 리스트 조회
    @GetMapping
    public ResponseEntity getQuestions(@RequestParam @Positive int page,
                                       @RequestParam @Positive int size) {
        // Pagination
        Page<Question> pageQuestions = questionService.findQuestions(page, size);

        List<Question> questions = pageQuestions.getContent();

        List<QuestionResponseDto> response = mapper.questionsToQuestionResponseDtos(questions);

        return new ResponseEntity<>(new MultiResponseDto<>(response, pageQuestions), HttpStatus.OK);
    }

    // 특정 질문 업데이트(수정)
    @PatchMapping("/{question-id}")
    public ResponseEntity patchQuestion(@PathVariable("question-id") @Positive long questionId,
                                        @Valid @RequestBody QuestionPatchDto questionPatchDto) {
        questionPatchDto.setQuestionId(questionId);

        Question question = questionService.updateQuestion(mapper.questionPatchDtoToQuestion(questionPatchDto));

        QuestionResponseDto response = mapper.questionToQuestionResponseDto(question);

        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    // 특정 질문 삭제
    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive long questionId) {
        questionService.deleteQuestion(questionId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

}
