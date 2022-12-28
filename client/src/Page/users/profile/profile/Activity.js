import profileAnswerData from './profileAnswerData';
import profileQuestionData from './profileQuestionData';
import styled from 'styled-components';

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

    .borderbox {
        display: flex;
        flex-direction: column;
        box-shadow: 1px 0 5px -2px rgb(90, 90, 90);
        border-radius: 5px;
        padding: 15px;
        width: 100%;

        p {
            margin-bottom: 20px;
        }
    }

    .answer {
        width: 450px;

        span{
            margin-bottom: 5px;
            border-bottom: 1px solid var(--theme-border);
        }
    }

    .title {
        font-size: 20px;
    }

    .stats {
        display:flex;
        flex-direction: column;

        span {
            margin-bottom: 15px;
        }
    }
`;

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
                        <div>
                            <div>
                                <span className='title'>Stats</span>
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
                                <span className='title'>Answers</span>
                                <div className='borderbox answer'>
                                {
                                    profileAnswerData.map((el,idx) => {
                                        return (
                                            <>
                                                <span>
                                                    <VoteButton>{el.votes}</VoteButton>{el.title}
                                                    <span>{el.createdAt}</span>
                                                </span>
                                            </>
                                        )
                                    })
                                }
                                </div> 
                            </div>
                            <div>
                                <span className='title'>Questionos</span>
                                <div className='borderbox answer'>
                                {
                                    profileQuestionData.map((el,idx) => {
                                        return (
                                            <>
                                                <span><VoteButton>{el.votes}</VoteButton>{el.title}</span>
                                            </>
                                        )
                                    })
                                }
                                </div>
                            </div>
                        </StyledQnA>
                    </Wrapper>    
    )
}

export default Activity;