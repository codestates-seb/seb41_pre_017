import { Container, Main, Sidebar } from '../../global/Sidebar';
import styled from 'styled-components';
import { useState } from 'react';
import ProfileHeader from './profile/ProfileHeader';
import Activity from './profile/Activity';
import Settings from './profile/Settings';
import { useGet } from '../../components/hook/API';
import { useCookies } from 'react-cookie';
import { useParams } from 'react-router-dom';

const Wrapper = styled.div`
    height: 100vh;

    .active {
        background-color: var(--theme-Orange);
        color: white;
        border: 0px;
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
    const { memberId } = useParams();
    const [clickedBtn, setClickedBtn] = useState(0);
    const [qnaBtn, setQnaBtn] = useState(0);
    const [settingBtn, setSettingBtn] = useState(0);
    const [changeNickname, setChangeNickname] = useState('');
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useGet(`members/${memberId}`, setLoading);
    const [cookie, , removeCookie] = useCookies(['memberId']);

    const HandleSettings = (e) => {
        setClickedBtn(1);
    };

    const checkId = () => {
        return cookie.memberId === memberId;
    };

    return (
        <Container>
            <Sidebar />
            <Main>
                <ProfileHeader userData={userData} changeNickname={changeNickname} />
                <Wrapper>
                    <StyledButton className={clickedBtn === 0 ? 'active' : null} onClick={(e) => setClickedBtn(0)}>
                        Activity
                    </StyledButton>
                    {checkId() ? (
                        <StyledButton className={clickedBtn === 1 ? 'active' : null} onClick={HandleSettings}>
                            Settings
                        </StyledButton>
                    ) : null}
                    {clickedBtn === 0 ? (
                        <Activity userData={userData} qnaBtn={qnaBtn} setQnaBtn={setQnaBtn} />
                    ) : (
                        <Settings
                            userData={userData}
                            changeNickname={changeNickname}
                            setChangeNickname={setChangeNickname}
                            settingBtn={settingBtn}
                            setSettingBtn={setSettingBtn}
                            setUserData={setUserData}
                        />
                    )}
                </Wrapper>
            </Main>
        </Container>
    );
};

export default Profile;
