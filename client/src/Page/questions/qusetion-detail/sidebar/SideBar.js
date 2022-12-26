import Widget from "./Widget";
import Related from "./Related";
import HotNetworkQuestion from "./HotNetworkQuestion";
import styled from "styled-components";

const SideSection = styled.div`
  float: right;
  width: 300px;
  margin: 0 0 15px;
  margin-left: 24px;

  @media screen and (max-width: 980px) {
    float: none;
    clear: both;
    margin: 0 auto;
    width: 100%;
  }
`;

//질문 콘텐츠 옆에 위치한 사이드바 항목들입니다
const SideBar = () => {
    return (
        <SideSection>
            <Widget/>
            <Related/>
            <HotNetworkQuestion/>
        </SideSection>
    )
};

export default SideBar;