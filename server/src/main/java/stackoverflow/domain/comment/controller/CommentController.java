package stackoverflow.domain.comment.controller;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import stackoverflow.domain.comment.dto.CommentRequestDto;
import stackoverflow.domain.comment.dto.CommentResponseDto;
import stackoverflow.domain.comment.entity.Comment;
import stackoverflow.domain.comment.mapper.CommentMapper;
import stackoverflow.domain.comment.service.CommentService;
import stackoverflow.dto.MultiResponseDto;
import stackoverflow.dto.SingleResponseDto;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/comments")
@Validated
public class CommentController {
    private final CommentMapper commentMapper;
    private final CommentService commentService;

    public CommentController(CommentMapper commentMapper, CommentService commentService) {
        this.commentMapper = commentMapper;
        this.commentService = commentService;
    }

    @PostMapping
    public ResponseEntity postComment(@Valid @RequestBody CommentRequestDto.Post request) {
        Comment createdComment = commentService.createComment(commentMapper.postDtoToComment(request));
        CommentResponseDto response = commentMapper.commentToResponseDto(createdComment);
        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.CREATED);
    }

    @PatchMapping("{comment-id}")
    public ResponseEntity patchComment(@PathVariable("comment-id") @Positive long commentId,
                                       @Valid @RequestBody CommentRequestDto.Patch request) {
        request.setCommentId(commentId);
        Comment comment = commentService.updateComment(commentMapper.patchDtoToComment(request));
        CommentResponseDto response = commentMapper.commentToResponseDto(comment);
        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getComments(@RequestParam @Positive int page,
                                      @RequestParam @Positive int size) {
        Page<Comment> pageComments = commentService.findComments(page, size);
        List<Comment> comments = pageComments.getContent();
        List<CommentResponseDto> response = commentMapper.commentToResponseDtos(comments);
        return new ResponseEntity<>(new MultiResponseDto<>(response, pageComments), HttpStatus.OK);
    }

    @GetMapping("{comment-id}")
    public ResponseEntity getComment(@PathVariable("comment-id") @Positive long commentId) {
        Comment comment = commentService.findComment(commentId);
        CommentResponseDto response = commentMapper.commentToResponseDto(comment);
        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    @DeleteMapping("{comment-id}")
    public ResponseEntity deleteComment(@PathVariable("comment-id") @Positive long commentId) {
        commentService.deleteComment(commentId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
