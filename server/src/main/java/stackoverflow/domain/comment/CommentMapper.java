package stackoverflow.domain.comment;

import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CommentMapper {
    Comment postDtoToComment(CommentRequestDto.Post post);
    Comment PatchDtoToComment(CommentRequestDto.Patch patch);
    CommentResponseDto commentToResponseDto(Comment comment);
    List<CommentResponseDto> commentToResponseDtos(List<Comment> comments);
}
