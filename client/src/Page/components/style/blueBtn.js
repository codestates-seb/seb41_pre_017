import styled from 'styled-components';

// 파란색 배경의 흰색 텍스트 박스
const BlueBtn = styled.button`
    background-color: #0a95ff;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer; // 마우스 모양 설정
    :hover {
        background-color: rgb(0 116 204);
    }
    
    :disabled {
      background-color: gray;
      cursor: unset;
    }
`;

export default BlueBtn;
