package stackoverflow.domain.answers.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import stackoverflow.domain.answers.entity.Answers;

public interface AnswersRepository extends JpaRepository<Answers, Long>, CrudRepository<Answers, Long> {
}
