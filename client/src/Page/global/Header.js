import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BlueBtn from '../components/style/blueBtn';
import { ReactComponent as Logo } from '../../Img/logo.svg';
import SearchInput from '../components/style/SearchInput';
import useInput from '../components/hook/useInput';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';

const Container = styled.div`
  position: fixed;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
  width: 100%;
  top: 0px;
  border-top: 3px solid var(--theme-Orange);
  background-color: #ffffff;
  z-index: 1; // 화면 겹쳤을때 화면 최상위로 끌어올림
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  position: relative;
  max-width: 1264px;
  flex: 1 0 auto;
  justify-content: space-between;
  margin: 0 auto; // 증앙정렬
  height: 100%;
`;

const StyledLogo = styled(Logo)`
  height: 30px;
  width: 150px;
  padding-top: 10px;
`;

const UserInfoLink = styled(Link)`
  img {
    width: 40px;
    height: 40px;
    -webkit-transform: scale(1);
    transform: scale(1);

    :hover {
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
      -webkit-transition: 0.3s ease-in-out;
      transition: 0.3s ease-in-out;
    }
  }
`;

const ProfileLink = styled(Link)`
  text-decoration: none;
  margin-right: 10px;
`;

const StyledBtn = styled.button`
  height: 55px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: white;

  :hover {
    background: var(--theme-button-hover-background-color);
    color: var(--theme-button-hover-color);
  }
`;

const StyledLink = styled(Link)`
  :hover {
    background: var(--theme-button-hover-background-color);
    color: var(--theme-button-hover-color);
  }

  height: 55px;
`;

const Links = styled.ul`
  display: flex;
  height: 50px;
  line-height: 50px; // 요소의 최소 높이 설정
  list-style: none; // ol태그 점과 숫자 표시 없애기
  overflow-x: auto; //가로 스크롤바
  overflow-y: hidden; //세로 스크롤바 숨기기
  margin: 0px 10px 0 10px;

  //스크롤바 설정 https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar
  ::-webkit-scrollbar {
    height: 10px; // 스크롤바의 크기
  }

  ::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background: #217af4; /* 스크롤바의 색상 */

    border-radius: 10px;
  }

  // 스크롤바 뒷 배경 색상
  ::-webkit-scrollbar-track {
    background: rgba(33, 122, 244, 0.1);
  }
`;

function Header() {
    const [value, setValue, ChangeValue] = useInput();
    const [cookie, removeCookie] = useCookies(['memberId']);
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();
    const Submit = (e) => {
        if (e.key === 'Enter') {
            navigate('/questions', { state: value });
            window.location.reload();
        }
    };

    const authCheck = () => {
        const memberId = cookie.memberId;
        if (memberId !== 'undefined') {
            return axios
                .get(`http://localhost:8080/members/${memberId}`)
                .then((res) => {
                    setUserName(res.data.data.nickname);
                })
                .catch((err) => console.log(err.message));
        }
    };

    useEffect(() => {
        authCheck();
    }, [authCheck]);

    const logoutHandler = () => {
        axios
            .post('http://localhost:8080/users/logout')
            .then((res) => {
                removeCookie('memberId');
                setUserName('');
            })
            .catch((err) => console.log(err.message));
    };

    return (
        <Container>
            <StyledHeader>
                <StyledLink className="blue_button_hover" to="/">
                    <StyledLogo></StyledLogo>
                </StyledLink>

                <StyledBtn>Products</StyledBtn>

                <SearchInput type="text" placeholder="  Search..." onChange={ChangeValue} Value={value} setValue={setValue} onKeyPress={Submit} />
                {cookie.memberId !== 'undefined' && (
                    <UserInfoLink to="/users/profile">
                        <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcqGhr6%2FbtrCOJ8rccY%2FBhZcEFwWj2ccg2nmvfrvWk%2Fimg.png" alt="profile img" />
                    </UserInfoLink>
                )}
                <Links>
                    {cookie.memberId === 'undefined' && (
                        <Fragment>
                            <li>
                                <ProfileLink to="/users/login">
                                    <BlueBtn>Log in</BlueBtn>
                                </ProfileLink>
                            </li>
                            <li>
                                <ProfileLink to="/users/signUp" className="profile">
                                    <BlueBtn>Sign Up</BlueBtn>
                                </ProfileLink>
                            </li>
                        </Fragment>
                    )}
                    {cookie.memberId !== 'undefined' && (
                        <li>
                            <ProfileLink to={'/'}>
                                <BlueBtn onClick={logoutHandler}>Log Out</BlueBtn>
                            </ProfileLink>
                        </li>
                    )}
                </Links>
            </StyledHeader>
        </Container>
    );
}

export default Header;
