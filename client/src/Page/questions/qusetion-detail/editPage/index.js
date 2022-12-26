import { Sidebar, Container, Main } from '../../../global/Sidebar';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import InputBox from '../../../component/function/InputBox';
import useInput from '../../../component/hook/useInput';
import BlueBtn from '../../../component/style/blueBtn';

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
    let data = useLocation().state.data;
    let category = useLocation().state.category;

    const sendToServer = () => {
        if (category === 'answer') {
            console.log(Content);
        } else if (category === 'question') {
            console.log(Title);
            console.log(Content);
        }
        // 수정된 데이터 서버에 보내기, ex) axios.post('http://localhost:3000/answer', data);
    };

    const [Content, setContent, ChangeContent] = useInput(data.content);
    const [Title, setTitle, ChangeTitle] = useInput(data.title);
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
