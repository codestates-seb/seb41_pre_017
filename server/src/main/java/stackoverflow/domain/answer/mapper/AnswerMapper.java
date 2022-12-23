package stackoverflow.domain.answer.mapper;

import org.mapstruct.Mapper;
import stackoverflow.domain.answer.dto.AnswerPatchDto;
import stackoverflow.domain.answer.dto.AnswerPostDto;
import stackoverflow.domain.answer.dto.AnswerResponseDto;
import stackoverflow.domain.answer.entity.Answer;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto);

    Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto);

    AnswerResponseDto answerToAnswerResponse(Answer answer);

    List<AnswerResponseDto> answersToAnswerResponses(List<Answer> answers);
}
