import styled from 'styled-components';
import BlueBtn from '../../component/style/blueBtn';
import { Sidebar, Container, Main } from '../../global/Sidebar';
import Contents from './Contents';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Loading from '../../component/style/loading';

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
    const [data, setData] = useState();

    // 서버에서 데이더 받아오기
    useEffect(() => {
        const fetchData = async () => {
            await axios
                .get('https://jsonplaceholder.typicode.com/posts')
                .then((res) => {
                    return setData(res.data);
                })
                .then(() => setLoading(false))
                .catch((error) => console.error(error));
        };
        setTimeout(() => {
            fetchData();
        }, 1000);
        setLoading(true);
    }, []);
    return (
        <>
            <Container>
                <Sidebar />
                <Main>
                    <StyledHeader>
                        <H1>All Questions</H1>
                        <Link to="/questions/ask">
                            <BlueBtn>Ask Question</BlueBtn>
                        </Link>
                    </StyledHeader>
                    {loading ? <Loading /> : <Contents _data={data}></Contents>}
                </Main>
            </Container>
        </>
    );
};

export default Questions;
