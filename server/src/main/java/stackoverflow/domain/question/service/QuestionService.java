package stackoverflow.domain.question.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import stackoverflow.exception.BusinessLogicException;
import stackoverflow.exception.ExceptionCode;
import stackoverflow.domain.question.entity.Question;
import stackoverflow.domain.question.repository.QuestionRepository;

import java.util.Optional;

@Service
public class QuestionService {
    private final QuestionRepository questionRepository;

    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    // 질문 등록
    public Question createQuestion(Question question) {
        // TODO: 연관관계 매핑 이후 로그인 필요

        return questionRepository.save(question);
    }

    // 특정 질문 조회(검색)
    public Question findQuestion(long questionId) {
        // TODO: 추후 예외 처리 생성

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
        // TODO: 연관관계 매핑 이후 로그인, 작성자 확인 필요

        Optional.ofNullable(question.getTitle()).ifPresent(title -> question.setTitle(title));
        Optional.ofNullable(question.getContent()).ifPresent(content -> question.setContent(content));

        return questionRepository.save(question);
    }

    // 특정 질문 삭제
    public void deleteQuestion(long questionId) {
        // TODO: 연관관계 매핑 이후 로그인, 작성자 확인 필요

        questionRepository.deleteById(questionId);
    }
}
