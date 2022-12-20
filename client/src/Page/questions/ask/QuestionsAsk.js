import styled from 'styled-components';
import AdviceData from './component/AdviceData';
import AskHeader from './component/AskHeader';
import TitleInput from './component/TitleInput';
import Buttons from './component/Buttons';
import ExpectingInput from './component/ExpectingInput';
import ProblemInput from './component/ProblemInput';
import TagBox from './component/TagBox';

const VirtualNav = styled.div`
    width: 100%;
    height: 47px;
    background-color: gray;
`

const Wrapper = styled.div`
    width: 100%;
    max-width: 1264px;
    margin: 0;
    border: 2px solid black;

    a {
        color: var(--theme-link-text);
    }

    .adviceBox {
        background-color: black;
    }
`

const QuestionsAsk = () => {
    return (
        <>
            <VirtualNav />
            <Wrapper>
                <AskHeader />
                <div className='adviceBox'>{AdviceData[0]}</div>
                <TitleInput />
                <div className='adviceBox'>{AdviceData[1]}</div>
                <ProblemInput />
                <div className='adviceBox'>{AdviceData[2]}</div>
                <ExpectingInput />
                <div className='adviceBox'>{AdviceData[3]}</div>
                <TagBox />
                <Buttons />
            </Wrapper>
        </>
    )
}

export default QuestionsAsk;