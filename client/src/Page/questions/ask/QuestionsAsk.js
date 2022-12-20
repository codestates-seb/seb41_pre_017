import styled from 'styled-components';
import Advice from './component/Advice';
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
`

const QuestionsAsk = () => {
    return (
        <>
            <VirtualNav />
            <Wrapper>
                <AskHeader />
                <Advice />
                <TitleInput />
                <Advice />
                <ProblemInput />
                <Advice />
                <ExpectingInput />
                <Advice />
                <TagBox />
                <Buttons />
            </Wrapper>
        </>
    )
}

export default QuestionsAsk;