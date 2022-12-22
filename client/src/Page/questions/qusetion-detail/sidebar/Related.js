import styled from "styled-components";

const ModuleSideBarRelated = styled.div`
  word-wrap: break-word;
  margin-bottom: 1.5rem;
`;

const RelatedTitle = styled.h4`
  color: hsl(210,8%,25%);
  font-size: 1.46153846rem;
  font-weight: 400;
  margin-bottom: 1em;
  margin-top: 0;
  display: block;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const RelatedQuestions = styled.div`
  font-size: 14px;
  line-height: 1.3;
`;

const RelatedContainer = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

const VotedScoreBox = styled.div`
  color: hsl(0,0%,100%);
  background-color: hsl(140,40%,55%);
  padding: 3px 0;
  white-space: nowrap;
  width: 38px;
  text-align: center;
  box-sizing: border-box;
  height: auto;
  float: none;
  border-radius: 2px;
  font-size: 90%;
  transform: translateY(-1px);
  border: 1px solid transparent;
  cursor: pointer;
`;

const RelatedLink = styled.span`
  padding-left: 10px;
  font-size: 13px;
  display: inline-block;
  padding-top: 2px;
  width: calc(100% - 48px);
  margin-bottom: 0;
  color: blue;
  line-height: 1.3;
  cursor: pointer;
`;

const RelatedBox = (
    <RelatedQuestions>
        <RelatedContainer>
            <VotedScoreBox>
                500
            </VotedScoreBox>
            <RelatedLink>Solution for other questions!</RelatedLink>
        </RelatedContainer>
    </RelatedQuestions>
)

const Related = () => {
    return (
        <ModuleSideBarRelated>
            {/*sidebar related*/}
            <RelatedTitle>Related</RelatedTitle>
                {RelatedBox}
                {RelatedBox}
                {RelatedBox}
                {RelatedBox}
                {RelatedBox}
                {RelatedBox}
                {RelatedBox}
                {RelatedBox}
                {RelatedBox}
                {RelatedBox}
        </ModuleSideBarRelated>
    )
};

export default Related;