import styled from 'styled-components';
import TagNav from '../style/tagNav';
import {Link} from 'react-router-dom';
import TimeForToday from './timeForToday';
// 질문 리스트 페이지 (Home, questions에서 사용되는 질문상자박스 입니다)

const QuestionRow = styled.div`
  flex-grow: 1;
  padding: 16px;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid var(--theme-border);

  .userLink {
    color: var(--theme-link-text);
  }
`;

const QuestionStat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin-right: 20px;

  span {
    margin-bottom: 5px;
    font-size: 13px;
  }

  .voted {
    border: 1px solid #2f6f44;
    color: #2f6f44;
    border-radius: 5px;
    padding: 3px;
  }
`;

const Question = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
`;

const SummaryMeta = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-right: 30px;
`;

const Title = styled.h2`
  color: var(--theme-link-text);
  margin-bottom: 15px;
  margin-top: 5px;
  font-size: 16px;
`;
const Time = styled.span`
  margin-left: 10px;
`;
const questions = ({data}) => {
    console.log(data.memberId)
    const time = data.modifiedAt ? TimeForToday(new Date(data.modifiedAt)) : TimeForToday(new Date());
    return (
        <QuestionRow>
            <QuestionStat>
                <span>{data.votes ? data.votes : 0} votes</span>
                <span className={data.answers ? 'voted' : null}>{data.answers ? data.answers : 0} answers</span>
                <span>{data.views ? data.views : 0} views</span>
            </QuestionStat>
            <Question>
                <Link
                    to={`/questions/${data.questionId}`}
                    state={{
                        id: data.questionId,
                    }}
                >
                    <Title> {data.title}</Title>
                </Link>

                <SummaryMeta>
                    <nav className="tags">{data.tags ? data.tags.map((tag) => <TagNav
                        key={tag}>{tag}</TagNav>) : null}</nav>
                    <span className="userCard">
                        <Link to={`/users/${data.memberId}`}>
                            <span className="userLink">{data.nickname ? data.nickname : 'anonymous'}</span>
                        </Link>
                        <Time>{data.modifiedAt ? time : time}</Time>
                    </span>
                </SummaryMeta>
            </Question>
        </QuestionRow>
    );
};

export default questions;
