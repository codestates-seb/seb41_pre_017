import {Container, Main, Sidebar} from '../../global/Sidebar';
import styled from 'styled-components';
import { useState } from 'react';
import profileAnswerData from './profile/profileAnswerData';
import profileQuestionData from './profile/profileQuestionData';

const Wrapper = styled.div`
    height: 100vh;

    .active {
        background-color: var(--theme-Orange);
        color: white;
        border : 0px;
    }
`

const StyledHeader = styled.div`
    display: flex;
    
    img {
    width: 128px;
    height: 128px;
    }

    p {
        font-size: 30px;
    }

    .userinfo {
        margin-left: 20px;
    }
`;
const StyledButton = styled.button`
    border-radius: 40px;
    width: 100px;
    height: 40px;
    margin-right: 10px;
    cursor: pointer;

`;
const Content = styled.div`
    display: flex;
    margin-top: 20px;

    .menu {
        display:flex;
        flex-direction: column;
        margin-right: 80px;
        span {
            margin-bottom: 15px;
        }
    }
    .borderbox {
        display: flex;
        flex-direction: column;
        border: 1px solid var(--theme-border);
        border-radius: 5px;
        margin-right: 40px;
        padding: 15px;
        width: 100%;

        p {
            margin-bottom: 20px;
        }
    }
    .answer {
        width: 600px;
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

const Profile = () => {
    const [ clickedBtn, setClickedBtn ] = useState(0);

    return (
        <Container>
            <Sidebar />
                <Main>
                    <Wrapper>
                    <StyledHeader>
                        <img src="https://avatars.githubusercontent.com/u/110921798?s=400&v=4" alt="profile img"/>
                        <div className='userinfo'>
                            <p>username</p>
                            <span>Logout /</span>
                            <span> Edit /</span>
                            <span> Delete profile</span>
                        </div>
                    </StyledHeader>
                    <StyledButton className={clickedBtn === 0 && "active"} onClick={(e) => setClickedBtn(0)}>Activity</StyledButton>
                    <StyledButton className={clickedBtn === 1 && "active"} onClick={(e) => setClickedBtn(1)}>Settings</StyledButton>
                    <Content>
                        <div>
                            <div className='menu'>
                                <span>Summary</span>
                                <span>Answers</span>
                                <span>Questions</span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span className='title'>Stats</span>
                                <div className='borderbox stats'>
                                    {/* <span>{profileAnswerData.votes+profileAnswerData.votes}</span> */}
                                    <span>17</span>
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
                                                <span><VoteButton>{el.votes}</VoteButton>{el.title}</span>
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
                    </Content>
                </Wrapper>
            </Main>
        </Container>
        
    )
};

export default Profile;
