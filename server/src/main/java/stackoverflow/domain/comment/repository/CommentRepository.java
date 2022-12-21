package stackoverflow.domain.comment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import stackoverflow.domain.comment.entity.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long> {
}
