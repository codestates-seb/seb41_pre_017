import {Container, Main, Sidebar} from '../../global/Sidebar';
import ContentList from './ContentList';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import BlueBtn from '../../components/style/blueBtn';
import questionDB from '../../../db.json';
import answerDB from '../../../answerDB.json';
import {useState} from 'react';
import ContentSidebar from './sidebar/SideBar';

const StyledHeader = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-bottom: 8px;

  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
`;

const H1 = styled.h1`
  overflow-wrap: break-word;
  font-size: 25px;
  font-weight: 400;
  flex: 1 auto;
  line-height: 1.3;
`;

const Information = styled.div`
  display: flex;
  font-size: 15px;
  padding-bottom: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
  border-color: hsl(210, 8%, 90%);
  border-bottom: 1px solid var(--theme-border);
`;

const ElContainer = styled.div`
  white-space: nowrap;
  margin-bottom: 8px;
  margin-right: 16px;
`;

const AmvTitle = styled.span`
  color: hsl(210, 8%, 45%);
  margin: 0 4px;
`;

const Time = styled.span`
  color: #232629;
  margin-left: 2px;
  margin-right: 20px;
`;

const ContentLayout = styled.div`
  display: flex;
  width: calc(100% - 300px - 24px);
  float: left;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 980px) {
    width: 100%;
    float: none;
  }
`;
//개별 질문 페이지 구성 화면입니다
const SingleQuestion = () => {
    //서버에서 받아와야 될 데이터
    const [questionData, setQuestionData] = useState(questionDB.questions[0]);
    const [answerData, setAnswerData] = useState(answerDB.answer);

    return (
        <Container>
            <Sidebar/>
            <Main>
                {/* 헤더 = 제목, 질문생성 버튼, 질문정보(날짜등등) */}
                <StyledHeader>
                    <H1>{questionData.title}</H1>
                    <Link to={'/questions/ask'}>
                        <BlueBtn>Ask Question</BlueBtn>
                    </Link>
                </StyledHeader>
                <Information>
                    <ElContainer>
                        <AmvTitle>Asked</AmvTitle>
                        <Time>today</Time>
                    </ElContainer>
                    <ElContainer>
                        <AmvTitle>Modified</AmvTitle>
                        <Time>today</Time>
                    </ElContainer>
                    <ElContainer>
                        <AmvTitle>Viewed</AmvTitle>
                        <Time>2 times</Time>
                    </ElContainer>
                </Information>
                {/* 질문과, 답변 = 콘텐츠 영역 */}
                <ContentLayout>
                    <ContentList dataList={{questionData, answerData}} dataHandler={{setQuestionData, setAnswerData}}/>
                </ContentLayout>
                <ContentSidebar/>
            </Main>
        </Container>
    );
};

export default SingleQuestion;
