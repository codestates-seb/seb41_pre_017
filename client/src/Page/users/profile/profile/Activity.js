import styled from 'styled-components';
import AnswerDetail from './AnswerDetail';
import QuestionoDetail from './QuestionDetail';
import Summary from './Summary';
import profileAnswerData from './data/profileAnswerData';
import profileQuestionData from './data/profileQuestionData';

const Wrapper = styled.div`
    display: flex;

    .menu .buttonClicked {
        background-color: #F1F2F3;
        box-shadow: 1px 0 5px -2px rgb(90, 90, 90);
    }

    .menu button {
        display:flex;
        align-items:center;
        justify-content: center;
        flex-direction: column;
        width: 150px;
        height: 30px;
        margin: 0px 60px 15px 0px;
        background-color: white;
        border-radius: 10px;
        cursor: pointer;
    }
`;

const Activity = ({qnaBtn, setQnaBtn}) => {
    return (
            <Wrapper>
                <div>
                    <div className='menu'>
                        <button className={qnaBtn === 0 && "buttonClicked"} onClick={(e) => setQnaBtn(0)}>Summary</button>
                        <button className={qnaBtn === 1 && "buttonClicked"} onClick={(e) => setQnaBtn(1)}>Answers</button>
                        <button className={qnaBtn === 2 && "buttonClicked"} onClick={(e) => setQnaBtn(2)}>Questions</button>
                    </div>
                </div>
                {
                    qnaBtn === 0 ? <Summary profileAnswerData={profileAnswerData} profileQuestionData={profileQuestionData}/> 
                    : 
                    (
                        qnaBtn === 1 ? <AnswerDetail profileAnswerData={profileAnswerData}/> : <QuestionoDetail profileQuestionData={profileQuestionData} />
                    )
                }
            </Wrapper>   
    )
}   

export default Activity;