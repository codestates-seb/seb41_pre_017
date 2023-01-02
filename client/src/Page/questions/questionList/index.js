import styled from 'styled-components';
import BlueBtn from '../../components/style/blueBtn';
import { Container, Main, Sidebar } from '../../global/Sidebar';
import Contents from './Contents';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Loading from '../../components/style/loading';
import { useGet } from '../../components/hook/API';
import { useCookies } from 'react-cookie';

const StyledHeader = styled.header`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 30px 20px;
    border-bottom: 1px solid var(--theme-border);
`;

const H1 = styled.h1`
    font-size: 1.8rem;
    font-weight: bold;
`;

const Questions = () => {
    const [loading, setLoading] = useState(true);
    const { state } = useLocation();
    const [data] = useGet(`questions?page=1&size=200`, setLoading, state);
    const [cookie] = useCookies(['memberId']);

    return (
        <Container>
            <Sidebar />
            <Main>
                <StyledHeader>
                    <H1>All Questions</H1>
                    {cookie.memberId !== undefined ? (
                        <Link to="/questions/ask">
                            <BlueBtn>Ask Question</BlueBtn>
                        </Link>
                    ) : (
                        <Link to="../users/login">
                            <BlueBtn>Ask Question</BlueBtn>
                        </Link>
                    )}
                </StyledHeader>
                {loading ? (
                    <Loading />
                ) : (
                    <Contents
                        _data={
                            state === null
                                ? data
                                : data.filter((el) => {
                                      if (el.title.includes(state)) return el;
                                      else if (el.nickname.includes(state)) return el;
                                  })
                        }
                    ></Contents>
                )}
            </Main>
        </Container>
    );
};

export default Questions;
