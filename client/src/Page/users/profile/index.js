import {Container, Main, Sidebar} from '../../global/Sidebar';
import styled from 'styled-components';
import { useState } from 'react';
import Activity from './profile/Activity';
import Settings from './profile/Settings';
import { userInfo } from './profile/data/userInfo';
import { ReactComponent as Created } from './profile/img/createdAt.svg'
import { ReactComponent as Email } from './profile/img/email.svg'

const StyledHeader = styled.div`
    display: flex;
    
    img {
        width: 128px;
        height: 128px;
        box-shadow: 1px 0 5px -2px rgb(90, 90, 90);
    }

    .userinfo {
        display:flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 20px;

        p {
            font-size: 30px;
            margin-bottom: 15px;
        }
        
        span {
            color: gray;
            font-size: 13px;
            margin: 0px 10px 5px 0px;

            svg {
                height: 12px;
                margin-right: 5px;
            }
        }
    }
`;

const Wrapper = styled.div`
    height: 100vh;

    .active {
        background-color: var(--theme-Orange);
        color: white;
        border : 0px;
    }
`

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

    // https://avatars.githubusercontent.com/u/110921798?s=400&v=4
    return (
        <Container>
            <Sidebar />
            <Main>
                <StyledHeader>
                    <img src="http://www.gravatar.com/avatar/iml1111?d=identicon&s=400" alt="profile img"/>
                    <div className='userinfo'>
                        <p>{userInfo[0].nickname}</p>
                        <span><Created />{userInfo[0].createdAt} </span>
                        <span><Email />{userInfo[0].email}</span>
                    </div>
                </StyledHeader>
                <Wrapper>
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
