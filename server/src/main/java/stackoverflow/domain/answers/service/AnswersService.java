package stackoverflow.domain.answers.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import stackoverflow.domain.answers.entity.Answers;
import stackoverflow.domain.answers.repository.AnswersRepository;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class AnswersService {
    private final AnswersRepository answersRepository;

    public Answers createAnswers (Answers answers) {
        // 각 요소 객체 연결
        return answersRepository.save(answers);
    }
}
