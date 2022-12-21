import styled from 'styled-components';
import AskHeader from './AskComponent/AskHeader';
import ChainBox from './AskComponent/ChainBox';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1264px;
    flex: 1 0 auto;
    justify-content: space-between;
    margin: 0 auto;
`

const QuestionAsk = () => {
    return (
        <>
            <Wrapper>
                <AskHeader />
                <ChainBox />
            </Wrapper>
        </>
    )
}

export default QuestionAsk;