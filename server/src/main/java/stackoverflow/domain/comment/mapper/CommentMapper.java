package stackoverflow.domain.comment.mapper;

import org.mapstruct.Mapper;
import stackoverflow.domain.comment.entity.Comment;
import stackoverflow.domain.comment.dto.CommentRequestDto;
import stackoverflow.domain.comment.dto.CommentResponseDto;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CommentMapper {
    Comment postDtoToComment(CommentRequestDto.Post post);
    Comment patchDtoToComment(CommentRequestDto.Patch patch);
    CommentResponseDto commentToResponseDto(Comment comment);
    List<CommentResponseDto> commentToResponseDtos(List<Comment> comments);
}
