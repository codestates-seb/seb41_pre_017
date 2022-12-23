import styled from "styled-components";

const AmwContainer = styled.div`
  display: flex;
  font-size: 15px;
  padding-bottom: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
  border-color: hsl(210, 8%, 90%);
  border-bottom-style: solid;
  border-bottom-width: 1px;
`;

const ElContainer = styled.div`
  white-space: nowrap;
  margin-bottom: 8px;
  margin-right: 16px;
`;

const AmvTitle = styled.span`
  color: hsl(210,8%,45%);
  margin: 0 4px;
`;

//질문 제목 밑에 위치한 게시일, 편집일, 조회수 섹션입니다.
const AskModiView = (props) => {
    const viewedData = props.data.views;
    // console.log(viewedData);

    return (
        <AmwContainer>
            {/*게시글 수정일, 게시일, 본 사람 수 섹션*/}
            <ElContainer>
                <AmvTitle>Asked</AmvTitle>
                <span>today</span>
            </ElContainer>
            <ElContainer>
                <AmvTitle>Modified</AmvTitle>
                <span>today</span>
            </ElContainer>
            <ElContainer>
                <AmvTitle>Viewed</AmvTitle>
                <span>{viewedData}</span>
            </ElContainer>
        </AmwContainer>
    )
};

export default AskModiView;