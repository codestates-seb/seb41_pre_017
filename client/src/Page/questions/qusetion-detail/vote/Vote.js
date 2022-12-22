import styled from "styled-components";

const VoteCell = styled.div`
  width: auto;
  vertical-align: top;
  grid-column: 1;
  padding-right: 16px;
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
const Vote = (props) => {

    return (
        <VoteCell>
            {/*추천 비추천 버튼 섹션*/}
            <VotingContainer>
                {/*추천 버튼*/}
                <VoteButton>
                    <svg aria-hidden="true" className="svg-icon iconArrowUpLg" width="36"
                         height="36" viewBox="0 0 36 36">
                        <path d="M2 25h32L18 9 2 25Z"></path>
                    </svg>
                </VoteButton>
                {/*추천 갯수*/}
                <VoteNumber>{props.vote}</VoteNumber>
                {/*비추천 버튼*/}
                <VoteButton>
                    <svg aria-hidden="true" className="svg-icon iconArrowDownLg" width="36"
                         height="36" viewBox="0 0 36 36">
                        <path d="M2 11h32L18 27 2 11Z"></path>
                    </svg>
                </VoteButton>
            </VotingContainer>
        </VoteCell>
    )
};

export default Vote;