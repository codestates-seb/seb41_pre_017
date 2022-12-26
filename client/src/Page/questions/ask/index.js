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
`

const QuestionAsk = () => {    
    const [ title, setTitle ] = useState('');
    const [ expect, setExpect ] = useState('');
    const [ problem, setProblem ] = useState('');
    const [ tag, setTag ] = useState('');

    const handleReset = () => {
        // setInputData({problem: '', title: '', expect: '', tag: ''});
        setTitle('')
        setExpect('')
        setProblem('')
        setTag('')
   }
    // { title, expect: expect, problem: problem, tag: tag }
    // axios.post('/questions/ask', {
    //     title,
    //     expect,
    //     problem,
    //     tag
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });


    return (
        <>
            <Wrapper>
                <AskHeader />
                <ChainBox 
                    title={title} setTitle={setTitle}
                    expect={expect} setExpect={setExpect}
                    problem={problem} setProblem={setProblem}
                    tag={tag} setTag={setTag}  
                    handleReset={handleReset}  />
                <div className='buttonSubmit'>
                    <StyledButton onClick={()=>console.log({title, expect, problem, tag})}>Review your question</StyledButton>
                    <StyledButton onClick={handleReset} color="red" background="white">Discard draft</StyledButton>
                </div>
            </Wrapper>
        </>
    )
}

export default QuestionAsk;