import Btn from "./Btn";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 875px;
    padding: 24px;
    border: 1px solid red;
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