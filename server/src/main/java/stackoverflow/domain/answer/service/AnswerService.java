package stackoverflow.domain.answer.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import stackoverflow.domain.answer.entity.Answer;
import stackoverflow.domain.answer.repository.AnswerRepository;
import stackoverflow.domain.member.entity.Member;
import stackoverflow.domain.member.service.MemberService;
import stackoverflow.domain.question.entity.Question;
import stackoverflow.domain.question.service.QuestionService;
import stackoverflow.global.exception.BusinessLogicException;
import stackoverflow.global.exception.ExceptionCode;

import java.util.List;
import java.util.Optional;

@Service
public class AnswerService {

    private final AnswerRepository answerRepository;
    private final MemberService memberService;
    private final QuestionService questionService;

    public AnswerService(AnswerRepository answerRepository, MemberService memberService, QuestionService questionService) {
        this.answerRepository = answerRepository;
        this.memberService = memberService;
        this.questionService = questionService;
    }
    public Answer createAnswer (Answer answer) {
        Member createdMember = memberService.findVerifiedMember(answer.getMember().getMemberId());
        answer.setMember(createdMember);

        return answerRepository.save(answer);
    }

    public Answer updateAnswer (Answer answer) {
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());

        Optional.ofNullable(answer.getContent())
                .ifPresent(findAnswer::setContent);

        return answerRepository.save(findAnswer);
    }

//    public Answer findAnswer (long answerId) {
//        return answerRepository.findById(answerId).orElseThrow(() -> new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
//    }

    public Page<Answer> findAnswers(long questionId, int page, int size) {
        Question question = questionService.findQuestion(questionId);
        List<Answer> answers =  question.getAnswers();

        PageRequest pageRequest = PageRequest.of(page - 1, size, Sort.by("answerId").descending());

        int start = (int) pageRequest.getOffset();
        int end = Math.min((start + pageRequest.getPageSize()), answers.size());

        return new PageImpl<>(answers.subList(start, end), pageRequest, answers.size());
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
