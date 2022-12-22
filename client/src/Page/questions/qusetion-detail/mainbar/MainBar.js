import Vote from "../vote/Vote";
import QuestionContent from "../QuestionContent";
import Answer from "../answer/Answer";

import styled from "styled-components";

const MainSection = styled.div`
  width: calc(100% - 300px - 24px);
  float: left;
  margin: 0;
  padding: 0;
`;


const PostLayout = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
`;

//투표 버튼과 질문 컨텐츠 포함하는 섹션입니다
const MainBar = (props) => {
    const contentData = props.data;
    const voteData = props.data.votes;

    return (
        <MainSection>
            <PostLayout>
                {/*단일 question 항목 렌더링*/}
                <Vote vote={voteData}/>
                <QuestionContent data={contentData}/>
            </PostLayout>
            <Answer/>
        </MainSection>
    )
};

export default MainBar;