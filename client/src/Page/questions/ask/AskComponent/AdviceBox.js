import styled from "styled-components";
import Pencil from "../img/pencil.png";

const Wrapper = styled.div`
    display: ${({isHide, idx}) => isHide[idx] ? 'block': 'none'};
    border: 1px solid #E3E6E8;
    width: 350px;
    height: auto;
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
    margin: 10px;

    img {
        margin: 0px 8px;
        width: 48px;
        height: 50px;
    }

    .content {
        margin: 0px 8px;
    }

    p {
        width: 250px;
        margin-bottom: 12px;
        font-size: 13px;
    }

    p:nth-of-type(3) {
        margin-bottom: 0px;
    }
`

const AdviceBox = ({data, isHide, idx}) => {
    
    return (
        <Wrapper isHide={isHide} idx={idx}>       
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