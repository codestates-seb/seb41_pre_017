package stackoverflow.domain.answer.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import stackoverflow.audit.BaseTime;
import stackoverflow.domain.comment.entity.Comment;
import stackoverflow.domain.member.entity.Member;
import stackoverflow.domain.question.entity.Question;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Answer extends BaseTime {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long answerId;

    @Column(nullable = false, length = 5000)
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

    @ManyToOne()
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    public long getQuestionId() {
        return question.getQuestionId();
    }

    @OneToMany(mappedBy = "answer", cascade = CascadeType.ALL)
    private List<Comment> comments = new ArrayList<>();
}
