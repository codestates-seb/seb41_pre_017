package stackoverflow.domain.question.service;

import org.springframework.stereotype.Service;
import stackoverflow.domain.question.entity.Question;
import stackoverflow.domain.question.repository.QuestionRepository;

import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {
    private QuestionRepository questionRepository;

    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    // 질문 등록
    public Question createQuestion(Question question) {
        return questionRepository.save(question);
    }

    // 특정 질문 업데이트(수정)
    public Question updateQuestion(Question question) {
        // TODO: 로그인 or 작성자 확인 필요

        Optional.ofNullable(question.getTitle()).ifPresent()(title -> findQuestion().setTitle(title));
        Optional.ofNullable(question.getContent()).ifPresent()(content -> findQuestion().setContent());

        return questionRepository.save(question);
    }

    // 특정 질문 조회(검색)
    public Question findQuestion(long questionId) {
        return
    }

    // 모든 질문 리스트 조회
    public List<Question> findQuestions() {
        return (List<Question>) questionRepository.findAll();
    }

    // 특정 질문 삭제
    public void deleteQuestion(long questionId) {
        // TODO: 로그인 or 작성자 확인 필요

        questionRepository.delete(findQuestion)
    }
}
