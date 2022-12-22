import QuestionHeader from "./QuestionHeader";
import AskModiView from "./AskModiView";
import SideBar from "./sidebar/SideBar";
import MainBar from "./mainbar/MainBar";

import db from '../../../db.json';
import styled from "styled-components";
import {useParams} from "react-router-dom";

const InnerContent = styled.div`
  background-color: hsl(0, 0%, 100%);
  border-radius: 0;
  border: 1px solid hsl(210, 8%, 85%);;
  border-top-width: 0;
  border-bottom-width: 0;
  border-left-width: 1px;
  border-right-width: 0;
  padding: 24px;
  box-sizing: border-box;
`;

//개별 질문 페이지
const QuestionDetail = () => {
    const {questionId} = useParams();

    const questionData = db.questions[questionId];

    return (
        <InnerContent>
            <QuestionHeader data={questionData}/>
            <AskModiView data={questionData}/>
            <MainBar data={questionData}/>
            <SideBar/>
        </InnerContent>
    )
};

export default QuestionDetail;