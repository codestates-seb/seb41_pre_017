package stackoverflow.domain.answer.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import stackoverflow.domain.answer.dto.AnswerPatchDto;
import stackoverflow.domain.answer.dto.AnswerPostDto;
import stackoverflow.domain.answer.entity.Answer;
import stackoverflow.domain.answer.mapper.AnswerMapper;
import stackoverflow.domain.answer.service.AnswerService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RequestMapping("/answers")
@RestController
@Validated
public class AnswerController {

    private final AnswerService answerService;
    private final AnswerMapper mapper;

    public AnswerController(AnswerService answerService, AnswerMapper mapper) {
        this.answerService = answerService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerPostDto answerPostDto) {
        Answer answer = answerService.createAnswer(mapper.answerPostDtoToAnswer(answerPostDto));

        return new ResponseEntity<>(mapper.answerToAnswerResponse(answer), HttpStatus.CREATED);
    }
    @PatchMapping("/{answer-id}")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") @Positive long answerId,
                                      @Valid @RequestBody AnswerPatchDto answerPatchDto) {
        answerPatchDto.setAnswerId(answerId);
        Answer answer = answerService.updateAnswer(mapper.answerPatchDtoToAnswer(answerPatchDto));
        return new ResponseEntity<>(mapper.answerToAnswerResponse(answer), HttpStatus.OK);
    }

    @GetMapping("/{answer-id}")
    public ResponseEntity getAnswer(@PathVariable("answer-id") @Positive long answerId) {
        Answer findAnswer = answerService.findAnswer(answerId);

        return new ResponseEntity<>(mapper.answerToAnswerResponse(findAnswer), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getAnswers(@RequestParam @Positive int page,
                                     @RequestParam @Positive int size) {
        Page<Answer> pageAnswer = answerService.findAnswers(page, size);
        List<Answer> answers = pageAnswer.getContent();
        return new ResponseEntity<>(mapper.answersToAnswerResponses(answers), HttpStatus.OK);
    }

    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") @Positive long answerId) {
        answerService.deleteAnswer(answerId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
