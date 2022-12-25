import { Sidebar, Container, Main } from '../../../global/Sidebar';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import InputBox from '../../../component/function/InputBox';
import useInput from '../../../component/hook/useInput';
import { HtmlToText } from '../../../component/function/textConverter';
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

// title = '', subtitle = '', OnChange, Placeholder = '입력해주세요', Value, setValue, SubmitBtnName, Submit

const EditPage = () => {
    let data = useLocation().state.data;
    const sendToServer = (data) => {
        // 수정된 데이터 서버에 보내기, ex) axios.post('http://localhost:3000/answer', data);
    };

    const [inputValue, setInputValue, handleChange, handleSubmit] = useInput(data.content, sendToServer);
    console.log('🚀  data', data);
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
                            <InputBox
                                title={'Body'}
                                subtitle={' '}
                                OnChange={handleChange}
                                Placeholder={'답변을 입력해주세요'}
                                Value={inputValue}
                                setValue={setInputValue}
                                SubmitBtnName={'Save edits'}
                                Submit={handleSubmit}
                            ></InputBox>
                        </EditInput>
                    </Section>
                    <RightSidebar>1</RightSidebar>
                </ContentLayout>
            </Main>
        </Container>
    );
};

export default EditPage;
