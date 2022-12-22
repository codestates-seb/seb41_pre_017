import styled from "styled-components";

const Menu = styled.div`
  margin: 4px;
  flex: 1 auto;
`;

const MenuWrapper = styled.div`
  padding-top: 2px;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 3px;
`;

const SingleMenu = styled.button`
  margin: 4px;
  cursor: pointer;
`;

const PostMenu = (props) => {
    return (
        <Menu>
            {/*question posting share, edit, follow 버튼*/}
            <MenuWrapper>
                <MenuContainer>
                    <SingleMenu>Share</SingleMenu>
                    <SingleMenu>Edit</SingleMenu>
                    <SingleMenu>Follow</SingleMenu>
                </MenuContainer>
            </MenuWrapper>
        </Menu>
    )
};

export default PostMenu;