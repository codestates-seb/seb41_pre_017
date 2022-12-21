import Widget from "./Widget";
import Related from "./Related";
import HotNetworkQuestion from "./HotNetworkQuestion";
import styled from "styled-components";

const SideSection = styled.div`
  margin-left: 24px;
  float: right;
  width: 300px;
  margin: 0 0 15px;
`;

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