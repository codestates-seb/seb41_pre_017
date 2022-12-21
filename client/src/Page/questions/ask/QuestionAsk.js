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
const Footer = styled.div`
    width: 100%;
    height: 320px;
    background-color: #232629;
    color: white;
    font-size: 100px;
`

const QuestionAsk = () => {
    const [inputData, setInputData] = useState({});
    

    return (
        <>
            <Wrapper>
                <AskHeader />
                <ChainBox inputData={inputData} setInputData={setInputData} />
                <div className='buttonSubmit'>
                    <StyledButton onClick={()=>console.log('a')}>Review your question</StyledButton>
                    <StyledButton color="red" background="white">Discard draft</StyledButton>
                </div>
            </Wrapper>
            <Footer>
                임시 footer입니다.
            </Footer>
        </>
    )
}

export default QuestionAsk;