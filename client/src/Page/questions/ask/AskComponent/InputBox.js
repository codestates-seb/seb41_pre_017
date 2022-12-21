import Btn from "./Btn";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 850px;
    padding: 24px;
    margin-bottom: 15px;
    border: 1px solid #E3E6E8;

    /* 첫번째 라벨 */
    >:first-child {
        font-weight: 800;
        margin-bottom: 2px;
    }

    /* 두번째 라벨 */
    >:nth-child(2){
        font-size: 14px;
    }

    input {
        border: 1px solid var(--theme-border);
        height: 25px;
        border-radius: 3px;
        margin: 7px 0px 10px 0px;
        padding-left: 10px;
    }

    textarea {
        border: 1px solid var(--theme-border);
        border-radius: 3px;
        margin: 7px 0px 10px 0px;
    }
`

const InputBox = ({data}) => {
    return (
        <Wrapper>
            <label htmlFor={data.id}>{data.label1}</label>
            <label htmlFor={data.id}>{data.label2}</label>
            {
                data.type === 0 ? 
                <input type="text" id={data.id} placeholder={data.placeholder}></input> :
                <textarea id={data.id} placeholder={data.placeholder}></textarea>
            }
            <Btn />
        </Wrapper>
    )
};

export default InputBox;