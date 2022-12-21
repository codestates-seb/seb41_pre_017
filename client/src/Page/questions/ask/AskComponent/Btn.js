import styled from "styled-components";

const StyledButton = styled.button`
    width: 50px;
    height: 37px;
    background-color: #0a95ff;
    border-top: 1px solid #6cbfff;
    border-radius: 5px;
    color: white;
    
    :hover {
        background-color: #0074CC;
        cursor: pointer;
    }
`   

const Btn = () => {
    return (
        <StyledButton>Next</StyledButton>
    )
}

export default Btn;