import styled from "styled-components";
import profileAnswerData from './profileAnswerData';
import profileQuestionData from './profileQuestionData';

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


const Summary = () => {
    return (
            <Wrapper>
                <div>
                    <div>
                        <h3>Stats</h3>
                        <div className='borderbox stats'>
                            {/* <span>{profileAnswerData.votes+profileAnswerData.votes}</span> */}
                            <span>10</span>
                            <p>total votes</p>
                            <span>{profileAnswerData.length}</span>
                            <p>answers</p>
                            <span>{profileQuestionData.length}</span>
                            <p>quetions</p>
                        </div>
                    </div>
                </div>
                <StyledQnA>
                    <div>
                        <h3>Answers</h3>
                        <div className='borderbox answer'>
                        {
                            profileAnswerData.map((el,idx) => {
                                return (
                                    <>
                                        <p>
                                            <VoteButton>{el.votes}</VoteButton>
                                            {el.title}
                                            <span>{el.createdAt}</span>
                                        </p>
                                    </>
                                )
                            })
                        }
                        </div> 
                    </div>
                    <div>
                        <h3>Questionos</h3>
                        <div className='borderbox answer'>
                        {
                            profileQuestionData.map((el,idx) => {
                                return (
                                    <>
                                        <p>
                                            <VoteButton>{el.votes}</VoteButton>
                                            {el.title}
                                            <span>{el.createdAt}</span>
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