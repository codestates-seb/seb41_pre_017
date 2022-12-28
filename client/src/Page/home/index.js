import styled from 'styled-components';
import Questions from '../components/function/questionsBox';
import db from '../../db.json';
import BlueBtn from '../components/style/blueBtn';
import { Sidebar, Container, Main } from '../global/Sidebar';
import { Link } from 'react-router-dom';
import Presentation from './presentation';

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

const Suggestion = styled.div`
    padding: 20px;
    padding-top: 50px;
    padding-bottom: 50px;
    font-size: 18px;
    a {
        font-weight: 600;
        color: var(--theme-link-text);
    }
`;
// Todo : 유저 쿠기 구현시 쿠키에 로그인정보가 있으면 Container 화면을 출력
function Home() {
    return (
        <Presentation></Presentation>
        // <Container>
        //     <Sidebar />
        //     <Main>
        //         <StyledHeader>
        //             <H1>Top Questions</H1>
        //             <Link to="/questions/ask">
        //                 <BlueBtn>Ask Question</BlueBtn>
        //             </Link>
        //         </StyledHeader>

        //         <section>
        //             {data.map((el) => (
        //                 <Questions key={el.id} data={el} />
        //             ))}
        //             <Suggestion>
        //                 Looking for more? Browse the <a href="/questions">complete list of questions</a> or popular tags. Help us answer unanswered questions.
        //             </Suggestion>
        //         </section>
        //     </Main>
        // </Container>
    );
}

export default Home;
