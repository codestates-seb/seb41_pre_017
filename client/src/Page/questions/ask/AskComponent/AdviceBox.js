import styled from "styled-components";
import Pencil from "../img/pencil.png";

const Wrapper = styled.div`
    border: 1px solid #E3E6E8;
    width: 350px;
    margin-left: 15px;
    box-shadow: 1px 1px 1px 1px #EDEEEE;

    .title {
        font-size: 20px;
        padding: 12px;
        background-color: #f8f9f9;
        border-bottom: 1px solid var(--theme-border);
    }
`

const Bottom = styled.div`
    display:flex;
    margin: 16px;

    img {
        margin: 0px 8px;
        width: 48px;
        height: 50px;
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
                <img src={Pencil} alt="pencil"/>
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