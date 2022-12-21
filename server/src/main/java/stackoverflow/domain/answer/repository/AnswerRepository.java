package stackoverflow.domain.answer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import stackoverflow.domain.answer.entity.Answer;

public interface AnswerRepository extends JpaRepository<Answer, Long>, CrudRepository<Answer, Long> {
}
