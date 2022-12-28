import Widget from './Widget';
import Related from './Related';
import HotNetworkQuestion from './HotNetworkQuestion';
import styled from 'styled-components';
import Icon1 from './img/pen2.png';
import Icon2 from './img/comment.png';
import Icon3 from './img/stack.png';

const SideSection = styled.div`
    float: right;
    width: 300px;
    margin: 0 0 15px;
    margin-left: 24px;
    font-size: 14px;

    @media screen and (max-width: 980px) {
        float: none;
        clear: both;
        margin: 0 auto;
        width: 100%;
    }
`;
const SideBarYellow = styled.div`
    background-color: rgb(253 247 226);
    border: 1px solid var(--theme-test);

    li {
        padding: 10px;
        list-style: none;
    }
`;
const BorderDown = styled.div`
    border-bottom: 1px solid var(--theme-test);
    padding: 10px;
    display: flex;
`;

const BorderNone = styled.div`
    padding: 10px;
    display: flex;
`;

const Icon = styled.img`
    margin-right: 10px;
    height: 15px;
    width: 15px;
`;

//질문 콘텐츠 옆에 위치한 사이드바 항목들입니다
const SideBar = () => {
    return (
        <SideSection>
            <SideBarYellow>
                <ui>
                    <BorderDown>
                        <h3>The Overflow Blog</h3>
                    </BorderDown>
                    <BorderNone>
                        <Icon src={Icon1} />
                        The three top-paying tech roles in 2022 and the skills you need to land them sponsored post
                    </BorderNone>
                    <BorderDown>
                        <Icon src={Icon1} />
                        Why the number input is the worst input
                    </BorderDown>
                    <BorderDown>
                        <h3>Featured on Meta</h3>
                    </BorderDown>
                    <BorderNone>
                        <Icon src={Icon2} />
                        Navigation and UI research starting soon
                    </BorderNone>
                    <BorderNone>
                        <Icon src={Icon3} />
                        2022 Community Moderator Election Results - now with two more mods!
                    </BorderNone>
                    <BorderNone>
                        <Icon src={Icon3} />
                        I'm standing down as a moderator
                    </BorderNone>
                    <BorderDown>
                        <Icon src={Icon3} />
                        Temporary policy: ChatGPT is banned
                    </BorderDown>
                </ui>
            </SideBarYellow>
            <Related />
            <HotNetworkQuestion />
        </SideSection>
    );
};

export default SideBar;
