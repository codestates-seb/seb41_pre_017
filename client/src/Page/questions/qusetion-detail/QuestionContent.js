import PostUser from "./content/PostUser";
import PostMenu from "./content/PostMenu";
import TagContent from "./content/TagContent";
import Content from "./content/Content";
import styled from "styled-components";
import PostSignature from "./content/PostSignature";


const QuestionCell = styled.div`
  width: auto;
  vertical-align: top;
  padding-right: 16px;
  grid-column: 2;
  min-width: 0;
`;

const PostCell = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 4px;
  margin-bottom: 16px;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-end;
`;

//질문 내용 섹션입니다
const QuestionContent = (props) => {
    const tags = props.data.tags;
    const user = props.data.user;
    const asked = props.data.asked;

    return (
        <QuestionCell>
            <Content/>
            <TagContent tagData={tags}/>
            <PostCell>
                <PostMenu/>
                <PostSignature askedData={asked}/>
                <PostUser userData={user} askedData={asked}/>
            </PostCell>
        </QuestionCell>
    )
};

export default QuestionContent;