import styled from 'styled-components';
import BlueBtn from '../component/blueBtn';
import { Sidebar, Container, Main } from '../global/Sidebar';
import Pagination from './pagination';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 30px 20px;
    border-bottom: 1px solid var(--theme-border);
`;

const H1 = styled.h1`
    font-size: 1.5rem;
`;

const Questions = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return (
        <Container>
            <Sidebar />
            <Main>
                <StyledHeader>
                    <H1>All Questions</H1>
                    <Link to="/questions/ask">
                        <BlueBtn>Ask Question</BlueBtn>
                    </Link>
                </StyledHeader>
                <Pagination url={url}></Pagination>
            </Main>
        </Container>
    );
};

export default Questions;
