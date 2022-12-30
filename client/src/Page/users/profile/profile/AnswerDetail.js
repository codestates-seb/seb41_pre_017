import styled from "styled-components";

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
`;

const BorderBox = styled.div`
        display: flex;
        flex-direction: column;
        box-shadow: 1px 0 5px -2px rgb(90, 90, 90);
        border-radius: 5px;
        padding: 15px;
        margin-top: 10px;
        width: 100%;

        p {
            margin-bottom: 5px;
            border-bottom: 1px solid var(--theme-border);
            cursor: pointer;
            font-size: 14px;

            span {
               display: flex;
               justify-content: flex-end;
               font-size: 12px;
               margin-left: 600px;
            }

            .zero {
            background-color: #F1F2F3;
            color: black;
        }
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

const AnswerDetail = ({profileAnswerData}) => {
    return (
        <Wrapper>
            <h2>{profileAnswerData.length} Answers</h2>
            <BorderBox>
                {
                    profileAnswerData.map((data, idx) => {
                        return (
                            <p key={idx}>
                                <VoteButton className={data.votes === 0 ? "zero" : null}>{data.votes}</VoteButton>
                                {data.title}
                                <span>{data.createdAt}</span>
                            </p>
                        )
                    })
                }
            </BorderBox>
        </Wrapper>
    )
}

export default AnswerDetail;