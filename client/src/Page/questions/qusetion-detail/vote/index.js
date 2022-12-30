import { useState } from 'react';
import styled from 'styled-components';

const VoteCell = styled.div`
    width: auto;
    vertical-align: top;
    grid-column: 1;
    padding-left: 15px;
    margin-top: 50px;
`;

const VotingContainer = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-direction: column;
    margin: calc(4px / 2 * -1);
`;

const VoteNumber = styled.div`
    text-align: center;
    font-size: 1.61538462rem;
`;

const VoteButton = styled.button`
    width: 36px;
    height: 36px;
    cursor: pointer;
`;

//투표 버튼 섹션입니다
const Vote = ({ data, dataHandler, index }) => {
    const [voteNum, isVoteNum] = useState(0);
    const VoteUp = () => {
        if (voteNum <= 0) {
            isVoteNum(voteNum + 1);
            //0은 false이기 때문에 0번째 인덱스일떄 true로 처리
            if ((index === 0) | index) {
                data[index].votes += 1;
            } else {
                data.votes += 1;
            }

            dataHandler(data);
            /* 만약 서버에서 Vote 구현한다면 서버에 수정된 데이터 전송 
                아니라면 지금처럼 로컬에서 작동만
            */
        }
    };
    const VoteDown = () => {
        if (voteNum >= 0) {
            isVoteNum(voteNum - 1);
            if ((index === 0) | index) {
                data[index].votes -= 1;
            } else {
                data.votes -= 1;
            }
            dataHandler(data);
            /* 만약 서버에서 Vote 구현한다면 서버에 수정된 데이터 전송 
                아니라면 지금처럼 로컬에서 작동만
            */
        }
    };

    return (
        <VoteCell>
            {/*추천 비추천 버튼 섹션*/}
            <VotingContainer>
                {/*추천 버튼*/}
                <VoteButton onClick={VoteUp}>
                    <svg aria-hidden="true" className="svg-icon iconArrowUpLg" width="36" height="36" viewBox="0 0 36 36">
                        <path d="M2 25h32L18 9 2 25Z"></path>
                    </svg>
                </VoteButton>
                {/*추천 갯수*/}
                <VoteNumber>{(index === 0) | index ? data[index].votes : data.votes}</VoteNumber>
                {/*비추천 버튼*/}
                <VoteButton onClick={VoteDown}>
                    <svg aria-hidden="true" className="svg-icon iconArrowDownLg" width="36" height="36" viewBox="0 0 36 36">
                        <path d="M2 11h32L18 27 2 11Z"></path>
                    </svg>
                </VoteButton>
            </VotingContainer>
        </VoteCell>
    );
};

export default Vote;
