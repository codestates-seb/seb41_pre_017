package stackoverflow.domain.comment;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class CommentService {
    private final CommentRepository commentRepository;

    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    public Comment createComment(Comment comment) {
        return commentRepository.save(comment);
    }

    public List<Comment> findComments() {
        return commentRepository.findAll();
    }

    public Comment findComment(long commentId) {
        return commentRepository.findById(commentId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public Comment updateComment(Comment comment) {
        Comment findComment = commentRepository.findById(comment.getCommentId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        Optional.ofNullable(comment.getContent()).ifPresent(findComment::setContent);
        return commentRepository.save(findComment);
    }

    public void deleteComment(long commentId) {
        commentRepository.deleteById(commentId);
    }
}
