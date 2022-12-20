import styled from 'styled-components';
import Questions from '../component/questionsBox';
import db from '../../db.json';
import BlueBtn from '../component/bluebtn';
import Sidebar from '../global/Sidebar';
import { Container, Main } from '../component/LayoutForSidebar';
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
