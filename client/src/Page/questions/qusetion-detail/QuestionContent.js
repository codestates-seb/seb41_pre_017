import PostUser from "./content/postUser";
import PostMenu from "./content/postMenu";
import TagContent from "./content/TagContent";
import Content from "./content/content";
import styled from "styled-components";
import PostSignature from "./content/postSignature";


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

const QuestionContent = (props) => {
    const tags = props.data.tags;
    const user = props.data.user;
    const asked = props.data.asked;
    // console.log(props.data.tags)

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