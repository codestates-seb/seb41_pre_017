import styled from 'styled-components';
import BlueBtn from '../../components/style/blueBtn';
import {Container, Main, Sidebar} from '../../global/Sidebar';
import Contents from './Contents';
import {Link, useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import Loading from '../../components/style/loading';
import {useGet} from '../../components/hook/API';
import {useCookies} from "react-cookie";
import axios from "axios";

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
    const [data] = useGet(`questions?page=1&size=200`, setLoading);
    const [cookie] = useCookies(['id']);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const authCheck = () => {
        const memberId = cookie.id;
        axios
            .get(`http://localhost:8080/members/${memberId}`)
            .then(res => {
                if (res.status === 200) {
                    setIsLoggedIn(true);
                }
            })
            .catch(err => console.log(err.message))
    }

    useEffect(() => {
        authCheck();
    }, []);

    return (
        <>
            <Container>
                <Sidebar/>
                <Main>
                    <StyledHeader>
                        <H1>All Questions</H1>
                        {isLoggedIn &&
                            <Link to="/questions/ask">
                                <BlueBtn>Ask Question</BlueBtn>
                            </Link>
                        }
                        {!isLoggedIn &&
                            <Link to={'/users/login'}>
                                <BlueBtn>Ask Question</BlueBtn>
                            </Link>
                        }
                    </StyledHeader>
                    {loading ? <Loading/> : <Contents _data={data}></Contents>}
                </Main>
            </Container>
        </>
    );
};

export default Questions;
