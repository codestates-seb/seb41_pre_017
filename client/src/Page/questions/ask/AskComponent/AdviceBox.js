import styled from "styled-components";

const Wrapper = styled.div`
    border: 2px solid black;
    width: 350px;

    .title {
        font-size: 20px;
        padding: 12px;
        background-color: #f8f9f9;
        border: 1px solid var(--theme-border);
    }
`

const Bottom = styled.div`
    display:flex;
    margin: 16px;

    .image {
        margin: 0px 8px;
        border: 1px solid blue;
        width: 48px;
    }

    .content {
        margin: 0px 8px;
    }

    p {
        width: 242px;
        margin-bottom: 12px;
        font-size: 100%;
    }
`

const AdviceBox = ({data}) => {
    return (
        <Wrapper>
            <div className="title">{data.title}</div>
            <Bottom>
                <div className="image">svg이미지!!!</div>
                <div className="content">
                    <p>{data.content}</p>
                    <p>{data.content2}</p>
                    <p>{data.content3}</p>
                </div>
            </Bottom>
        </Wrapper>
    )
};

export default AdviceBox;