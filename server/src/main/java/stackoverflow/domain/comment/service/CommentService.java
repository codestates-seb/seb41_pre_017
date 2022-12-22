package stackoverflow.domain.comment.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import stackoverflow.domain.comment.entity.Comment;
import stackoverflow.domain.comment.repository.CommentRepository;

import java.util.Optional;

@Service
public class CommentService {
    private final CommentRepository commentRepository;

    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    public Comment createComment(Comment comment) {
        // TODO 이미 등록된 댓글인지 확인? (필요 없어보임), Member 엔티티는 필요해보임
        return commentRepository.save(comment);
    }

    public Page<Comment> findComments(int page, int size) {
        return commentRepository.findAll(PageRequest.of(page - 1, size, Sort.by("commentId").descending()));
    }

    public Comment findComment(long commentId) {
        // TODO 존재하는 댓글인지부터 확인하는 검증 로직 필요
        return commentRepository.findById(commentId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public Comment updateComment(Comment comment) {
        // TODO 존재하는 댓글인지부터 확인하는 검증 로직 필요
        Comment findComment = commentRepository.findById(comment.getCommentId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        Optional.ofNullable(comment.getContent()).ifPresent(findComment::setContent);   // TODO Refactoring
        return commentRepository.save(findComment);
    }

    public void deleteComment(long commentId) {
        // TODO 존재하는 댓글인지부터 확인하는 검증 로직 필요
        commentRepository.deleteById(commentId);
    }

    // TODO 검증 로직 구현
//    public Comment findVerifiedComment(long commentId) {
//        Optional<Comment> optionalComment = commentRepository.findById(commentId);
//        return optionalComment.orElseThrow(() -> new BusinessLogicException(ExceptionCode.COMMENT_NOT_FOUND));
//    }
}
