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
        axios.post('https://ed8f-121-184-8-159.jp.ngrok.io/questions', {
                title,
                content: problem
            },
            { 
                headers:{ 
                'Content-type': 'application/json;charset=UTF-8', 
                'Accept': 'application/json' 
                }, 
                withCredentials: true
            }
        )
            .then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
            console.log('');
            
        })
            .then(res => {
                if (res.status === 201) {
                    alert('질문이 등록되었습니다')
                    navigate("/");
                }
                
        })
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
                    <StyledButton onClick={handleSubmit} disabled={submit ? false : true}>Review your question</StyledButton>
                    <StyledButton onClick={handleReset} color="red" background="white">Discard draft</StyledButton>
                </div>
            </Wrapper>
        </>
    )
}

export default QuestionAsk;