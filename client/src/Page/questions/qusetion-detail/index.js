import { Container, Main, Sidebar } from '../../global/Sidebar';
import ContentList from './ContentList';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BlueBtn from '../../component/style/blueBtn';
import questionDB from '../../../db.json';
import answerDB from '../../../answerDB.json';
import { useState } from 'react';
import ContentSidebar from './sidebar/SideBar';
const StyledHeader = styled.header`
    display: flex;
    flex-wrap: wrap;
    padding: 30px 20px;
    border-bottom: 1px solid var(--theme-border);
`;

const H1 = styled.h1`
    font-size: 1.8rem;
    font-weight: bold;
    width: 85%;
`;
const StyledLink = styled(Link)`
    width: 10%;
    margin-left: auto;
`;

const Information = styled.div`
    font-size: 16px;
    margin-top: 20px;
    color: rgb(106 115 124);
`;

const Time = styled.span`
    color: #232629;
    margin-left: 2px;
    margin-right: 20px;
`;

const ContentLayout = styled.div`
    display: flex;
`;
//개별 질문 페이지 구성 화면입니다
const SingleQuestion = () => {
    //서버에서 받아와야 될 데이터
    const [questionData, setQuestionData] = useState(questionDB.questions[0]);
    const [answerData, setAnswerData] = useState(answerDB.answer);

    return (
        <Container>
            <Sidebar />
            <Main>
                {/* 헤더 = 제목, 질문생성 버튼, 질문정보(날짜등등) */}
                <StyledHeader>
                    <H1>{questionData.title}</H1>
                    <StyledLink to="/questions/ask">
                        <BlueBtn>Ask Question</BlueBtn>
                    </StyledLink>
                    <Information>
                        Asked <Time>today</Time> Modified <Time>today</Time> Viewed <Time>2 times</Time>
                    </Information>
                </StyledHeader>
                {/* 질문과, 답변 = 콘텐츠 영역 */}
                <ContentLayout>
                    <ContentList dataList={{ questionData, answerData }} dataHandler={{ setQuestionData, setAnswerData }} />
                    <ContentSidebar />
                </ContentLayout>
            </Main>
        </Container>
    );
};

export default SingleQuestion;
