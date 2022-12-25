import styled from 'styled-components';
import InputBox from '../../../component/function/InputBox';
import useInput from '../../../component/hook/useInput';
import Content from './Content';

const Section = styled.section`
    max-width: 1100px;
    width: calc(100% - 164px);
    height: 100%;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
`;

const H1 = styled.h1`
    margin-left: 50px;
    font-weight: 100;
    margin-top: 30px;
`;

const EnterAnswer = styled.div`
    margin: 20px;
    margin-top: 50px;
`;

const ContentList = ({ dataList, dataHandler }) => {
    const questionData = dataList.questionData;
    const answerData = dataList.answerData;

    const sendToServer = (data) => {
        console.log('질문에 대한 답변 서버에 보내기', data);
        // 질문에 대한 답변을 서버에 보내기, ex) axios.post('http://localhost:3000/answer', data);
    };
    const [inputValue, setInputValue, handleChange, handleSubmit] = useInput('', sendToServer);

    return (
        <Section>
            {/*질문 */}
            <Content key={questionData.id} data={questionData} category={'question'} dataHandler={dataHandler.setQuestionData} />
            {/* 답변 */}
            <H1>{answerData.length} Answers</H1>
            {answerData.map((el, index) => (
                <Content key={el.id} category={'answer'} data={el} dataHandler={dataHandler.setAnswerData} answerData={answerData} index={index} />
            ))}
            {/*질문에 대한 답변 작성*/}
            <EnterAnswer>
                <InputBox
                    title={'Your Answer'}
                    subtitle={' '}
                    OnChange={handleChange}
                    Placeholder={'답변을 입력해주세요'}
                    Value={inputValue}
                    setValue={setInputValue}
                    SubmitBtnName={'Post Your Answer'}
                    Submit={handleSubmit}
                ></InputBox>
            </EnterAnswer>
        </Section>
    );
};

export default ContentList;
