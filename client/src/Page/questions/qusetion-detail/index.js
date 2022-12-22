import QuestionDetail from "./QuestionDetail";
import {Container, Main, Sidebar} from "../../global/Sidebar";

//개별 질문 페이지 구성 화면입니다
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