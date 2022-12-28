import styled from "styled-components";

const StyledButton = styled.button`
    width: auto;
    height: 37px;
    background-color: ${({background}) => background ? background : '#0a95ff'};
    border-top: 1px solid ${({color}) => color ? 'white' : '#0074CC' };
    border-radius: 5px;
    color: ${({color}) => color ? color : 'white' };
    margin-top: 8px;
    padding: 8px 8px;
    margin-left: ${({color}) => color ? '20px' : '' };
    
    :hover {
        background-color: ${({color}) => color ? '#FDF2F2' : '#0074CC' };
        cursor: pointer;
    }
`

export default StyledButton;