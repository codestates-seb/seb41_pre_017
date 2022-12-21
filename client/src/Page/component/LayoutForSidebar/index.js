import styled from 'styled-components';
/*
    사이드바를 사용시 레이아웃을 정렬해주는 css입니다
*/

export const Container = styled.div`
    position: relative;
    max-width: 1264px; // 최대 너비를 지정  -> 이 값 이상으로는 안커짐
    width: 100%; // 크기 100% 설정 ->위의 max-width와 조합하여 1264픽셀 이하에서 자동으로 크기가 줄었다 늘었다 함
    flex: 1 0 auto;
    display: flex;
    justify-content: space-between;
    margin: 0 auto; // 증앙정렬
`;

// 컨텐츠가 들어올 영역입니다
export const Main = styled.main`
    max-width: 1100px; // 최대 너비를 지정  -> 이 값 이상으로는 안커짐
    width: calc(100% - 164px); // css 함수 너비 100%에서 164px만큼 크기를 줄임(여백을 위해) https://developer.mozilla.org/ko/docs/Web/CSS/calc
`;
