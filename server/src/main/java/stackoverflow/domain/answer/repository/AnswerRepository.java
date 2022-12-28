package stackoverflow.domain.answer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import stackoverflow.domain.answer.entity.Answer;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
}
