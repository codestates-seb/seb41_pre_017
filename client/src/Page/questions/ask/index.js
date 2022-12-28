import { useState } from 'react';
import styled from 'styled-components';
import AskHeader from './AskComponent/AskHeader';
import StyledButton from './AskComponent/Btn';
import ChainBox from './AskComponent/ChainBox';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 1264px;
    flex: 1 0 auto;
    justify-content: space-between;
    margin: 0 auto;

    .buttonSubmit {
        margin-top: -20px;
        margin-bottom: 60px;
    }

    button:disabled {
        border: 0px;
        background-color : #82C7FC;
        cursor: default;
    }
`

const QuestionAsk = () => {    
    const [ title, setTitle ] = useState('');
    const [ problem, setProblem ] = useState('');
    const [ tag, setTag ] = useState('');
    const [ submit, setSubmit ] = useState(false);
    const navigate = useNavigate();

    const handleReset = () => {
        // setInputData({problem: '', title: '', expect: '', tag: ''});
        setTitle('');
        setProblem('');
        setTag('');
    }
    // { title, expect: expect, problem: problem, tag: tag }
    const handleSubmit = (e) => {
        const data = {
            title: 'title',
            content: 'problem',
            memberId : 1,
        }
        console.log(data);

        axios.post('http://localhost:8080/questions', data)
        .then(res => {
            if(res.status === 201) {
                alert('질문이 등록되었습니다.');
                navigate('/');
            }
        })
        .catch(e => console.log(e))
    }

    return (
        <>
            <Wrapper>
                <AskHeader />
                <ChainBox 
                    title={title} setTitle={setTitle}
                    problem={problem} setProblem={setProblem}
                    tag={tag} setTag={setTag} 
                    handleReset={handleReset} setSubmit={setSubmit} />
                <div className='buttonSubmit'>
                    <StyledButton type="button" onClick={handleSubmit} disabled={submit ? false : true}>Review your question</StyledButton>
                    <StyledButton onClick={handleReset} color="red" background="white">Discard draft</StyledButton>
                </div>
            </Wrapper>
        </>
    )
}

export default QuestionAsk;