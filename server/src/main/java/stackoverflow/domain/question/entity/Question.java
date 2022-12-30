package stackoverflow.domain.question.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import stackoverflow.domain.answer.entity.Answer;
import stackoverflow.audit.BaseTime;
import stackoverflow.domain.comment.entity.Comment;
import stackoverflow.domain.member.entity.Member;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Question extends BaseTime {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long questionId;

    @Column(nullable = false, length = 100)
    private String title;

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

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
    private List<Comment> comments = new ArrayList<>();

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
    private List<Answer> answers = new ArrayList<>();
}
