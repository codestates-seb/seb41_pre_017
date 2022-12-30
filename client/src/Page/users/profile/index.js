import {Container, Main, Sidebar} from '../../global/Sidebar';
import styled from 'styled-components';
import { useState } from 'react';
import Activity from './profile/Activity';
import Settings from './profile/Settings';
import { ReactComponent as Created } from './profile/img/createdAt.svg';
import { ReactComponent as Email } from './profile/img/email.svg';
import { useGet } from '../../components/hook/API';
import TimeForToday from '../../components/function/timeForToday'
import { useCookies } from 'react-cookie';

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
    const [changeNickname, setChangeNickname] = useState('');
    const [changePwd, setChangePwd] = useState('');
  
    const [loading, setLoading] = useState(false);
    const [cookie] = useCookies(['memberId']);
    const [userData] = useGet(`members/${cookie}`, setLoading);
    /*프로필 컴포넌트 get 요청을 보내서 응답으로 랜더링하는 것 까지 완료했습니다. 나중에 로그인 완성되시면 쿠키에 담아두신 memberId 
    프로필 컴포넌트 get요청 보내는 hook 엔드포인트에 담아주세요*/

    console.log(cookie);

    const HandleSettings = (e) => {
        setClickedBtn(1)
    }

    const time = TimeForToday(new Date(userData.createdAt))
    
    // https://avatars.githubusercontent.com/u/110921798?s=400&v=4
    
    return (
        <Container>
            <Sidebar />
            <Main>
                <StyledHeader>
                    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcqGhr6%2FbtrCOJ8rccY%2FBhZcEFwWj2ccg2nmvfrvWk%2Fimg.png" alt="profile img" />
                    <div className='userinfo'>
                        <p>{userData.nickname}</p>
                        <span><Created />Member for {time}</span>
                        <span><Email />{userData.email}</span>
                    </div>
                </StyledHeader>
                <Wrapper>
                    <StyledButton className={clickedBtn === 0 && "active"} onClick={(e) => setClickedBtn(0)}>Activity</StyledButton>
                    <StyledButton className={clickedBtn === 1 && "active"} onClick={HandleSettings}>Settings</StyledButton>
                    {
                        clickedBtn === 0 
                        ? <Activity userData={userData} qnaBtn={qnaBtn} setQnaBtn={setQnaBtn} /> 
                        : <Settings changePwd={changePwd} setChangePwd={setChangePwd} changeNickname={changeNickname} setChangeNickname={setChangeNickname} userData={userData} settingBtn={settingBtn} setSettingBtn={setSettingBtn} />
                    }
                </Wrapper>
            </Main>
        </Container>
        
    )
};

export default Profile;
