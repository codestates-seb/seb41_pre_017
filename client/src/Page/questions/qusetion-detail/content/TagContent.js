import TagNav from "../../../component/tagNav";
import styled from "styled-components";

const TagWrapper = styled.div`
  margin-bottom: 12px;
  margin-top: 24px;
`;

const TagContainer = styled.div`
  margin-bottom: 10px;
  clear: both;
  display: flex;
  flex-direction: column;
`;

const TagList = styled.ul`
  display: inline;
  list-style: none;
  margin-left: 0;
  margin-bottom: 1em;
`;
const TagContent = (props) => {
    const {tagData} = props;

    return (
        <TagWrapper>
            {/*해당 question 에 저장된 tag 목록*/}
            <TagContainer>
                <div className={'tag-content'}>
                    <TagList>
                        {tagData.map((tag, index) => (
                            <TagNav key={index}>{tag}</TagNav>
                        ))}
                    </TagList>
                </div>
            </TagContainer>
        </TagWrapper>
    )
};

export default TagContent;