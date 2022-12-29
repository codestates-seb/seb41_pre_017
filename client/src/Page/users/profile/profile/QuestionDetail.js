import styled from "styled-components";

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
`

const BorderBox = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 1px 0 5px -2px rgb(90, 90, 90);
    border-radius: 5px;
    padding: 15px;
    margin-top: 10px;
    width: 100%;
`

const QuestionDetail = () => {
    return (
        <Wrapper>
            <h2>0 Questions</h2>
            <BorderBox>
                
            </BorderBox>
        </Wrapper>
    )
}

export default QuestionDetail;