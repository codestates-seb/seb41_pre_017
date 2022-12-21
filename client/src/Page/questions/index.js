import styled from 'styled-components';
import Question from '../component/QuestionsBox';
import db from '../../db.json';
import BlueBtn from '../component/BlueBtn';
import { Sidebar, Container, Main } from '../global/Sidebar';

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

const data = db.questions;

const Questions = () => {
    return (
        <Container>
            <Sidebar />
            <Main>
                <StyledHeader>
                    <H1>All Questions</H1>
                    <BlueBtn>Ask Question</BlueBtn>
                </StyledHeader>

                <section>
                    {data.map((el) => (
                        <Question key={el.id} data={el} />
                    ))}
                </section>
            </Main>
        </Container>
    );
};

export default Questions;
