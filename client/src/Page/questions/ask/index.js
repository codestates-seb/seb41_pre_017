import { useState } from 'react';
import styled from 'styled-components';
import AskHeader from './AskComponent/AskHeader';
import StyledButton from './AskComponent/Btn';
import ChainBox from './AskComponent/ChainBox';

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

    const handleReset = () => {
        // setInputData({problem: '', title: '', expect: '', tag: ''});
        setTitle('');
        setProblem('');
        setTag('');
   }
    // { title, expect: expect, problem: problem, tag: tag }
    // axios.post('/questions/ask', {
    //     title,
    //     content: problem,
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    const handleSubmit = (e) => {
        console.log({title, content : problem});
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