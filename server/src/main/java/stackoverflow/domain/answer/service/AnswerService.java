package stackoverflow.domain.answer.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import stackoverflow.domain.answer.entity.Answer;
import stackoverflow.domain.answer.repository.AnswerRepository;
import stackoverflow.domain.exception.BusinessLogicException;
import stackoverflow.domain.exception.ExceptionCode;

import java.util.Optional;

@Service
public class AnswerService {

    private final AnswerRepository answerRepository;

    public AnswerService(AnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
    }
    public Answer createAnswer (Answer answer) {
        // 각 요소 객체 연결
        return answerRepository.save(answer);
    }

    public Answer updateAnswer (Answer answer) {
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());

        Optional.ofNullable(answer.getContent())
                .ifPresent(findAnswer::setContent);

        return answerRepository.save(findAnswer);
    }

    public Answer findAnswer (long answerId) {
        return answerRepository.findById(answerId).orElseThrow(() -> new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
    }

    public Page<Answer> findAnswers(int page, int size) {
        return answerRepository.findAll(PageRequest.of(page - 1, size, Sort.by("answerId").descending()));
    }

    public void deleteAnswer(long answerId) {
        answerRepository.deleteById(answerId);
    }

    public Answer findVerifiedAnswer(long answerId) {
        Optional<Answer> optionalAnswer =
                answerRepository.findById(answerId);
        Answer findAnswer =
                optionalAnswer.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
        return findAnswer;
    }
}
