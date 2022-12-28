import { Sidebar, Container, Main } from '../../../global/Sidebar';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import InputBox from '../../../components/function/InputBox';
import useInput from '../../../components/hook/useInput';
import BlueBtn from '../../../components/style/blueBtn';
import axios from 'axios';
import { TextToCode } from '../../../components/function/textConverter';
const ContentLayout = styled.div`
    display: flex;
`;

const Section = styled.section`
    flex-grow: 1;
`;
const RightSidebar = styled.aside`
    width: 400px;
`;
const Notice = styled.div`
    margin: 30px;
    padding: 20px;
    border: 1px solid rgb(230 207 121);
    border-radius: 7px;
`;
const EditInput = styled.div`
    margin: 20px;
    margin-top: 50px;
`;

const SubmitBtn = styled(BlueBtn)`
    margin-top: 30px;
    margin-bottom: 50px;
`;
const TitleInput = styled.input`
    height: 30px;
    border: 1px solid var(--theme-border);
    width: 100%;
    border-radius: 5px;
    margin-bottom: 30px;
    margin-top: 10px;
`;

const StyledTitle = styled.h2`
    font-weight: 100;
`;

const EditPage = () => {
    const data = useLocation().state.data;
    const category = useLocation().state.category;
    const navigate = useNavigate();
    const [Content, setContent, ChangeContent] = useInput(data.content);
    const [Title, setTitle, ChangeTitle] = useInput(data.title);

    const sendToServer = () => {
        if (category === 'answer') {
            const answerData = {
                answerId: data.answerId,
                content: TextToCode(Content),
            };
            axios.patch(`http://localhost:8080/answers/${data.answerId}`, answerData);
            navigate(-1);
        } else if (category === 'question') {
            const questionData = {
                questionId: data.questionId,
                title: Title,
                content: TextToCode(Content),
            };
            axios.patch(`http://localhost:8080/questions/${data.questionId}`, questionData);
            navigate(-1);
        }
    };

    return (
        <Container>
            <Sidebar />
            <Main>
                <ContentLayout>
                    <Section>
                        <Notice>
                            <p>Your edit will be placed in a queue until it is peer reviewed.</p>
                            <p className="mb0">
                                We welcome edits that make the post easier to understand and more valuable for readers. Because community members review edits,
                                please try to make the post substantially better than how you found it, for example, by fixing grammar or adding additional
                                resources and hyperlinks.
                            </p>
                        </Notice>
                        <EditInput>
                            {category === 'question' ? (
                                <>
                                    <StyledTitle>Title</StyledTitle>
                                    <TitleInput type={'text'} value={Title} onChange={ChangeTitle}></TitleInput>
                                </>
                            ) : null}
                            <InputBox
                                title={'Body'}
                                subtitle={' '}
                                OnChange={ChangeContent}
                                Placeholder={'답변을 입력해주세요'}
                                Value={Content}
                                setValue={setContent}
                            ></InputBox>
                            <SubmitBtn onClick={sendToServer}>Save edits</SubmitBtn>
                        </EditInput>
                    </Section>
                    <RightSidebar>{/*사이드바 영역*/}</RightSidebar>
                </ContentLayout>
            </Main>
        </Container>
    );
};

export default EditPage;
