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
    font-size: 50px;
`

const QuestionAsk = () => {
    const [inputData, setInputData] = useState({});
    
//    setInputData 에 데이터가 쌓이는데 이걸 지워

   const handleReset = () => {
        setInputData({ problem: '', title: '', expect: '', tag: ''});
   }
    

    return (
        <>
            <Wrapper>
                <AskHeader />
                <ChainBox inputData={inputData} handleReset={handleReset} setInputData={setInputData} />
                <div className='buttonSubmit'>
                    <StyledButton onClick={()=>console.log(inputData)}>Review your question</StyledButton>
                    <StyledButton onClick={handleReset} color="red" background="white">Discard draft</StyledButton>
                </div>
            </Wrapper>
            <Footer>
                임시 footer입니다.
            </Footer>
        </>
    )
}

export default QuestionAsk;