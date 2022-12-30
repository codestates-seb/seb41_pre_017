import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

/* 사이드바 입니다 */
const Aside = styled.aside`
    width: 200px;
    display: inline-block;
    margin-left: 40px;
    border-right: 1px solid var(--theme-border);

    @media screen and (max-width: 640px) {
        display: none;
    }
`;

const Nav = styled.nav`
    position: sticky;
    margin-top: 20px;
    top: 80px;
    font-size: 14px;
`;

const NavList = styled.ol`
    padding: 0;
    margin-top: 16px;
    list-style: none;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;

    li {
        padding-left: 10px;
        margin-bottom: 10px;
    }
    .subNav {
        margin-bottom: 10px;
        margin-left: 20px;
    }
`;

const StyledLink = styled(Link)`
    padding-left: 10px;
    height: 40px;
    line-height: 40px; //텍스트 중앙정렬
    :hover {
        background: var(--theme-button-hover-background-color);
        color: var(--theme-button-hover-color);
    }
`;
const SelectLink = styled(Link)`
    padding-left: 10px;
    height: 40px;
    line-height: 40px; //텍스트 중앙정렬
    border-right: 3px solid var(--theme-Orange);
    background-color: var(--theme-button-hover-background-color);
`;

export function Sidebar() {
    const location = useLocation(); //현재 url주소 불러옴
    const [select, isSelect] = useState();

    //url 주소 바뀔때마다 select에 할당하여 url주소 기준으로 탭선택 이펙트 구현
    useEffect(() => {
        isSelect(location.pathname.split('/')[1]);
    }, [location]);

    return (
        <Aside>
            <Nav>
                <NavList>
                    {select === '' ? <SelectLink to="/">Home</SelectLink> : <StyledLink to="/">Home</StyledLink>}
                    <NavList>
                        <li>PUBLIC</li>
                        {select === 'questions' ? (
                            <SelectLink className="subNav" to="/questions">
                                Questions
                            </SelectLink>
                        ) : (
                            <StyledLink className="subNav" to="/questions">
                                Questions
                            </StyledLink>
                        )}
                        {select === 'users' ? (
                            <SelectLink className="subNav" to="/users">
                                Users
                            </SelectLink>
                        ) : (
                            <StyledLink className="subNav" to="/users">
                                Users
                            </StyledLink>
                        )}

                        <StyledLink className="subNav" to="/">
                            Profile
                        </StyledLink>
                    </NavList>
                </NavList>
            </Nav>
        </Aside>
    );
}

/*
    사이드바를 사용시 레이아웃을 정렬해주는 css입니다
*/

export const Container = styled.div`
    position: relative;
    max-width: 1264px; // 최대 너비를 지정  -> 이 값 이상으로는 안커짐
    width: 100%; // 크기 100% 설정 ->위의 max-width와 조합하여 1264픽셀 이하에서 자동으로 크기가 줄었다 늘었다 함
    flex: 1 0 auto;
    display: flex;
    justify-content: space-between;
    margin: 0 auto; // 증앙정렬
`;

// 컨텐츠가 들어올 영역입니다
export const Main = styled.main`
    max-width: 1100px; // 최대 너비를 지정  -> 이 값 이상으로는 안커짐
    width: calc(100% - 200px); // css 함수 너비 100%에서 164px만큼 크기를 줄임(여백을 위해) https://developer.mozilla.org/ko/docs/Web/CSS/calc
    padding: 24px;

    @media screen and (max-width: 980px) {
        padding-left: 16px;
        padding-right: 16px;
    }

    @media screen and (max-width: 640px) {
        width: 100%;
        border-left: 0;
        border-right: 0;
    }
`;
