import styled from 'styled-components';
import AskHeader from './AskComponent/AskHeader';
import ChainBox from './AskComponent/ChainBox';
import Header from '../../global/Header';

const VirtualNav = styled.div`
    width: 100%;
    height: 47px;
    background-color: gray;
`

const Wrapper = styled.div`
    
    margin: 0;
    padding: 0px, 16px, 24px, 16px;
    border: 2px solid black;

    

    .adviceBox {
        border: 2px solid black;
    }
`

const QuestionAsk = () => {
    return (
        <>
            <Header />
            <Wrapper>
                <AskHeader />
                <ChainBox />
            </Wrapper>
        </>
    )
}

export default QuestionAsk;