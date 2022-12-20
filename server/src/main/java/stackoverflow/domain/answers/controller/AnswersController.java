package stackoverflow.domain.answers.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import stackoverflow.domain.answers.dto.AnswersPostDto;
import stackoverflow.domain.answers.entity.Answers;
import stackoverflow.domain.answers.mapper.AnswersMapper;
import stackoverflow.domain.answers.service.AnswersService;

import javax.validation.Valid;

@RequiredArgsConstructor
@RequestMapping("/answers")
@RestController
public class AnswersController {
    private final AnswersService answersService;
    private final AnswersMapper mapper;

    @PostMapping
    public ResponseEntity postAnswers(@Valid @RequestBody AnswersPostDto answersPostDto) {
        Answers answers = answersService.createAnswers(mapper.answersPostToAnswers(answersPostDto));

        return new ResponseEntity<>(mapper.answersToAnswersResponse(answers), HttpStatus.CREATED);
    }
}
