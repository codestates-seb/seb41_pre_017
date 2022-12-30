import styled from 'styled-components';
import TagNav from '../style/tagNav';
import { Link } from 'react-router-dom';

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
        font-size: 13px;
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

const questions = ({ data }) => {
    return (
        <QuestionRow>
            <QuestionStat>
                <span>{data.votes ? data.votes : 0} votes</span>
                <span>{data.answers ? data.answers : 0} answers</span>
                <span>{data.views ? data.views : 0} views</span>
            </QuestionStat>
            <Question>
                <Link to={`/questions/${data.id}`}>
                    <Title> {data.title}</Title>
                </Link>

                <SummaryMeta>
                    <nav className="tags">{data.tags ? data.tags.map((tag) => <TagNav key={tag}>{tag}</TagNav>) : null}</nav>
                    <span className="userCard">
                        <span className="userLink">{data.user ? data.user : 'anonymous'}</span> <span>{'11 asked 2 mins ago'}</span>
                    </span>
                </SummaryMeta>
            </Question>
        </QuestionRow>
    );
};

export default questions;
