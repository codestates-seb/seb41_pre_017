import styled from "styled-components";
import { useState } from "react";
import { useGet } from "../../../components/hook/API";

const Wrapper = styled.div`
    display: flex;
    .borderbox {
        display: flex;
        flex-direction: column;
        box-shadow: 1px 0 5px -2px rgb(90, 90, 90);
        border-radius: 5px;
        padding: 15px;
        margin-top: 10px;
        width: 100%;

        p {
            margin-bottom: 20px;
        }
    }

    .answer {
        width: 450px;

        p {
            margin-bottom: 5px;
            border-bottom: 1px solid var(--theme-border);
            cursor: pointer;

            span {
               display: flex;
               justify-content: flex-end;
               font-size: 12px;
            }
        }
    }

    .stats {
        display:flex;
        flex-direction: column;

        span {
            margin-bottom: 15px;
        }
    }
`

const StyledQnA = styled.div`
    margin-left: 60px;

    > div {
        margin-bottom: 20px;
    }
`;

const VoteButton = styled.button`
    background-color: #52BA7D;
    width: 30px;
    height: 20px;
    border-radius: 5px;
    color: white;
    margin-right: 10px;
`;



const Summary = ({profileAnswerData, profileQuestionData, data}) => {
    const [loading, setLoading] = useState(false);
    const [questionData] = useGet(`questions/2`, setLoading);
    console.log(questionData);

    const recentAnswer = profileAnswerData.filter((aData,idx) => {
        return aData.answerId <= 5
    });

    const recentQuestion = profileQuestionData.filter((qData,idx) => {
        return qData.questionId <=5
    });
        
    return (
            <Wrapper>
                <div>
                    <div>
                        <h3>Stats</h3>
                        <div className='borderbox stats'>
                            <strong>10{/*수정필요*/}</strong>
                            <p>total votes</p>
                            <strong>{profileAnswerData.length}</strong>
                            <p>answers</p>
                            <strong>{profileQuestionData.length}</strong>
                            <p>quetions</p>
                        </div>
                    </div>
                </div>
                <StyledQnA>
                    <div>
                        <h3>Recent 5 Answers</h3>
                        <div className='borderbox answer'>
                        {
                            recentAnswer.map((answerData,idx) => {
                                return (
                                    <>
                                        <p>
                                            <VoteButton>{answerData.votes}</VoteButton>
                                            {answerData.title}
                                            <span>{answerData.createdAt}</span>
                                        </p>
                                    </>
                                )
                            })
                        }
                        </div> 
                    </div>
                    <div>
                        <h3>Recent 5 Questions</h3>
                        <div className='borderbox answer'>
                        {
                            recentQuestion.map((questionData,idx) => {
                                return (
                                    <>
                                        <p>
                                            <VoteButton>{questionData.votes}</VoteButton>
                                            {questionData.title}
                                            <span>{questionData.createdAt}</span>
                                        </p>
                                    </>
                                )
                            })
                        }
                        </div>
                    </div>
                </StyledQnA>
            </Wrapper>
    )
};

export default Summary;