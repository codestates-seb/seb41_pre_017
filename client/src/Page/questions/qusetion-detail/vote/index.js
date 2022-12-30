import { useState } from 'react';
import styled, { css } from 'styled-components';

const VoteCell = styled.div`
    width: auto;
    vertical-align: top;
    grid-column: 1;
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
    background-color: transparent;

    svg {
        fill: gray;

        &:hover {
            fill: #f48225;
        }

        ${(props) =>
            props.isClicked &&
            css`
                fill: #f48225;
            `}
    }
`;

const upBtn = (
    <svg viewBox="0 0 36 36">
        <path d="M2 25h32L18 9 2 25Z"></path>
    </svg>
);

const downBtn = (
    <svg viewBox="0 0 36 36">
        <path d="M2 11h32L18 27 2 11Z"></path>
    </svg>
);

const bookMark = (
    <svg width="18" height="18" viewBox="0 0 18 18">
        <path d="m9 10.6 4 2.66V3H5v10.26l4-2.66ZM3 17V3c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v14l-6-4-6 4Z"></path>
    </svg>
);

const showHistory = (
    <svg width="19" height="18" viewBox="0 0 19 18">
        <path d="M3 9a8 8 0 1 1 3.73 6.77L8.2 14.3A6 6 0 1 0 5 9l3.01-.01-4 4-4-4h3L3 9Zm7-4h1.01L11 9.36l3.22 2.1-.6.93L10 10V5Z"></path>
    </svg>
);

//투표 버튼 섹션입니다
const Vote = ({ data, dataHandler, index }) => {
    const [num, setNum] = useState(0);
    const [isVote, isVot] = useState(0);
    const [isBookMarked, setIsBookMarked] = useState(false);

    const VoteUp = () => {
        if (isVote <= 0) {
            isVot(isVote + 1);
            setNum(num + 1);
        }
    };
    const VoteDown = () => {
        if (isVote >= 0) {
            isVot(isVote - 1);
            setNum(num - 1);
        }
    };

    const BookMarked = () => {
        setIsBookMarked(!isBookMarked);
    };

    return (
        <VoteCell>
            {/*추천 비추천 버튼 섹션*/}
            <VotingContainer>
                {/*추천 버튼*/}
                <VoteButton onClick={VoteUp}>{upBtn}</VoteButton>
                {/*추천 갯수*/}
                <VoteNumber>{num}</VoteNumber>
                {/*비추천 버튼*/}
                <VoteButton onClick={VoteDown}>{downBtn}</VoteButton>
                {/*북마크 버튼*/}
                <VoteButton isClicked={isBookMarked} onClick={BookMarked}>
                    {bookMark}
                </VoteButton>
                {/*이력확인 버튼*/}
                <VoteButton>{showHistory}</VoteButton>
            </VotingContainer>
        </VoteCell>
    );
};

export default Vote;
