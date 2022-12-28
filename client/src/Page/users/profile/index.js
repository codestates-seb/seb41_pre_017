import {Container, Main, Sidebar} from '../../global/Sidebar';
import styled from 'styled-components';
import { useState } from 'react';
import Activity from './profile/Activity';
import Settings from './profile/Settings';


const Wrapper = styled.div`
    height: 100vh;

    .active {
        background-color: var(--theme-Orange);
        color: white;
        border : 0px;
    }
`

const StyledHeader = styled.div`
    display: flex;
    
    img {
    width: 128px;
    height: 128px;
    box-shadow: 1px 0 5px -2px rgb(90, 90, 90);
    }

    p {
        font-size: 30px;
    }

    .userinfo {
        margin-left: 20px;
    }
`;
const StyledButton = styled.button`
    border-radius: 40px;
    background-color: white;
    width: 100px;
    height: 40px;
    margin: 25px 10px 25px 0px;
    box-shadow: 1px 0 5px -2px rgb(90, 90, 90);
    cursor: pointer;

`;

const Profile = () => {
    const [ clickedBtn, setClickedBtn ] = useState(0);
    const [ qnaBtn, setQnaBtn ] = useState(0);
    const [ settingBtn, setSettingBtn ] = useState(0);
  

    const HandleSettings = (e) => {
        setClickedBtn(1)
    }
    return (
        <Container>
            <Sidebar />
            <Main>
                <Wrapper>
                    <StyledHeader>
                        <img src="https://avatars.githubusercontent.com/u/110921798?s=400&v=4" alt="profile img"/>
                        <div className='userinfo'>
                            <h2>username</h2>
                            <span>Logout /</span>
                            <span> Edit /</span>
                            <span> Delete profile</span>
                        </div>
                    </StyledHeader>
                    <StyledButton className={clickedBtn === 0 && "active"} onClick={(e) => setClickedBtn(0)}>Activity</StyledButton>
                    <StyledButton className={clickedBtn === 1 && "active"} onClick={HandleSettings}>Settings</StyledButton>
                    {
                        clickedBtn === 0 ? <Activity qnaBtn={qnaBtn} setQnaBtn={setQnaBtn} /> : <Settings settingBtn={settingBtn} setSettingBtn={setSettingBtn} />
                    }
                </Wrapper>
            </Main>
        </Container>
        
    )
};

export default Profile;
