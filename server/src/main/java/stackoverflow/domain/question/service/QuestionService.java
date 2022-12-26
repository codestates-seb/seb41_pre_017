package stackoverflow.domain.question.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import stackoverflow.domain.member.service.MemberService;
import stackoverflow.exception.BusinessLogicException;
import stackoverflow.exception.ExceptionCode;
import stackoverflow.domain.question.entity.Question;
import stackoverflow.domain.question.repository.QuestionRepository;

import java.util.Optional;

@Service
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final MemberService memberService;

    public QuestionService(QuestionRepository questionRepository, MemberService memberService) {
        this.questionRepository = questionRepository;
        this.memberService = memberService;
    }

    // 질문 등록
    public Question createQuestion(Question question) {
        // 존재하는 회원인지 확인
        memberService.findVerifiedMember(question.getMember().getMemberId());

        return questionRepository.save(question);
    }

    // 특정 질문 조회(검색)
    public Question findQuestion(long questionId) {
        return questionRepository.findById(questionId).orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
    }

    // 모든 질문 리스트 조회
    public Page<Question> findQuestions(int page, int size) {
        // Pagination
        return questionRepository.findAll(PageRequest.of(page - 1, size,
                Sort.by("questionId").descending()));
    }

    // 특정 질문 업데이트(수정)
    public Question updateQuestion(Question question) {
        // 존재하는 질문인지 확인
        Question findQuestion = findVerifiedQuestion(question.getQuestionId());

        Optional.ofNullable(question.getTitle()).ifPresent(title -> findQuestion.setTitle(title));
        Optional.ofNullable(question.getContent()).ifPresent(content -> findQuestion.setContent(content));

        return questionRepository.save(findQuestion);
    }

    // 특정 질문 삭제
    public void deleteQuestion(long questionId) {
        // TODO: 연관관계 매핑 이후 로그인, 작성자 확인 필요

        // 존재하는 질문인지 확인
        findVerifiedQuestion(questionId);

        questionRepository.deleteById(questionId);
    }

    // 존재하는 질문인지 확인
    public Question findVerifiedQuestion(long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question findQuestion = optionalQuestion.orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));

        return findQuestion;
    }
}
