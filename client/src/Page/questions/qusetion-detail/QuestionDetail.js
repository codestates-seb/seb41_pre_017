import QuestionHeader from "./QuestionHeader";
import AskModiView from "./AskModiView";
import SideBar from "./sidebar/SideBar";
import MainBar from "./mainbar/MainBar";
import styled from "styled-components";

const InnerContent = styled.div`
  max-width: 1100px;
  width: calc(100% - 164px);
  background-color: hsl(0, 0%, 100%);
  border-radius: 0;
  border: 1px solid hsl(210,8%,85%);;
  border-top-width: 0;
  border-bottom-width: 0;
  border-left-width: 1px;
  border-right-width: 0;
  padding: calc(24px * 1);;
  box-sizing: border-box;
`;

const questionDetail = (props) => {
    return (
        <InnerContent>
            <QuestionHeader/>
            <AskModiView/>
            <MainBar/>
            <SideBar/>
        </InnerContent>
    )
};

export default questionDetail;