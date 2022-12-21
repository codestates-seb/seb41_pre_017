import QuestionDetail from "./QuestionDetail";
import {Container, Main, Sidebar} from "../../global/Sidebar";

const SingleQuestion = () => {
    return (
        <Container>
            <Sidebar/>
            <Main>
                <QuestionDetail/>
            </Main>
        </Container>
    )
};

export default SingleQuestion;