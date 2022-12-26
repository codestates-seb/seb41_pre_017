package stackoverflow.domain.comment.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import stackoverflow.domain.answer.service.AnswerService;
import stackoverflow.domain.comment.entity.Comment;
import stackoverflow.domain.comment.repository.CommentRepository;
import stackoverflow.domain.member.service.MemberService;
import stackoverflow.exception.BusinessLogicException;
import stackoverflow.exception.ExceptionCode;

import java.util.Optional;

@Service
public class CommentService {
    private final CommentRepository commentRepository;
    private final MemberService memberService;
    private final AnswerService answerService;


    public CommentService(CommentRepository commentRepository, MemberService memberService, AnswerService answerService) {
        this.commentRepository = commentRepository;
        this.memberService = memberService;
        this.answerService = answerService;
    }

    public Comment createComment(Comment comment) {
        memberService.findVerifiedMember(comment.getMemberId());
        answerService.findVerifiedAnswer(comment.getAnswerId());

        return commentRepository.save(comment);
    }

    public Comment updateComment(Comment comment) {
        Comment findComment = findVerifiedComment(comment.getCommentId());
        Optional.ofNullable(comment.getContent()).ifPresent(findComment::setContent); // TODO Refactoring

        return commentRepository.save(findComment);
    }

    public Comment findComment(long commentId) {
        return findVerifiedComment(commentId);
    }

    public Page<Comment> findComments(int page, int size) {
        return commentRepository.findAll(PageRequest.of(page - 1, size, Sort.by("commentId").descending()));
    }

    public void deleteComment(long commentId) {
        findVerifiedComment(commentId);

        commentRepository.deleteById(commentId);
    }

    public Comment findVerifiedComment(long commentId) {
        Optional<Comment> optionalComment = commentRepository.findById(commentId);
        Comment findComment = optionalComment.orElseThrow(() -> new BusinessLogicException(ExceptionCode.COMMENT_NOT_FOUND));

        return findComment;
    }
}
