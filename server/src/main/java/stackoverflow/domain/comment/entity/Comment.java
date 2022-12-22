package stackoverflow.domain.comment.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import stackoverflow.domain.answer.entity.Answer;
import stackoverflow.domain.audit.BaseTime;
import stackoverflow.domain.member.entity.Member;
import stackoverflow.domain.question.entity.Question;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Comment extends BaseTime {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long commentId;

    @Column(nullable = false)
    private String content;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    public long getMemberId() {
        return member.getMemberId();
    }

    public String getMemberNickname() {
        return member.getNickname();
    }

    @ManyToOne
    @JoinColumn(name = "ANSWER_ID")
    private Answer answer;

    public long getAnswerId() {
        return answer.getAnswerId();
    }

    @ManyToOne()
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    public long getQuestionId() {
        return question.getQuestionId();
    }
}
