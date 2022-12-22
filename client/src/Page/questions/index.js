import styled from 'styled-components';
import BlueBtn from '../component/blueBtn';
import { Sidebar, Container, Main } from '../global/Sidebar';
import Pagination from './pagination';

const StyledHeader = styled.header`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 30px 20px;
    border-bottom: 1px solid var(--theme-border-bottom);
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
                    <BlueBtn>Ask Question</BlueBtn>
                </StyledHeader>
                <Pagination url={url}></Pagination>
            </Main>
        </Container>
    );
};

export default Questions;
