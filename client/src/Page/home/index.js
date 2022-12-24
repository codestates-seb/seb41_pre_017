import styled from 'styled-components';
import Questions from '../component/questionsBox';
import db from '../../db.json';
import BlueBtn from '../component/blueBtn';
import { Sidebar, Container, Main } from '../global/Sidebar';
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
    font-weight: 400;
`;

const data = db.questions;

function Home() {
    return (
        <Container>
            <Sidebar />
            <Main>
                <StyledHeader>
                    <H1>Top Questions</H1>
                    <Link to="/questions/ask">
                        <BlueBtn>Ask Question</BlueBtn>
                    </Link>
                </StyledHeader>

                <section>
                    {data.map((el) => (
                        <Questions key={el.id} data={el} />
                    ))}
                </section>
            </Main>
        </Container>
    );
}

export default Home;
