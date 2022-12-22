import styled from "styled-components";

const Menu = styled.div`
  flex: 1 auto;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const SingleMenu = styled.span`
  margin: 4px;
  cursor: pointer;
`;

//share, edit, follow 버튼 박스입니다
const PostMenu = (props) => {
    return (
        <Menu>
            {/*question posting share, edit, follow 버튼*/}
            <MenuContainer>
                <SingleMenu>Share</SingleMenu>
                <SingleMenu>Edit</SingleMenu>
                <SingleMenu>Follow</SingleMenu>
            </MenuContainer>
        </Menu>
    )
};

export default PostMenu;