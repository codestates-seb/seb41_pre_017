package stackoverflow.domain.answers.mapper;

import org.mapstruct.Mapper;
import stackoverflow.domain.answers.dto.AnswersPostDto;
import stackoverflow.domain.answers.entity.Answers;

@Mapper(componentModel = "spring")
public interface AnswersMapper {
    Answers answersPostToAnswers(AnswersPostDto answersPostDto);

    Answers answersToAnswersResponse(Answers answers);
}
