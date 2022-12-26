import { Link } from 'react-router-dom';
import styled from 'styled-components';

// 파란색 태그입니다

const TagNav = styled(Link)`
    display: inline-block;
    margin-right: 10px;
    font-size: 12px;
    padding: 3px 10px 3px 10px;
    border-radius: 6px;
    background-color: rgb(225 236 244);
    color: rgb(57 115 157);
    cursor: pointer; // 마우스 모양 설정
    :hover {
        background-color: var(--theme-link-text2);
    }
`;

export default TagNav;
