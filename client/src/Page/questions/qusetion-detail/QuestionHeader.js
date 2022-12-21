import styled from "styled-components";
import BlueBtn from "../../component/blueBtn";
import {Link} from "react-router-dom";

const Header = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const Title = styled.h1`
  overflow-wrap: break-word;
  font-size: 2.07692308rem;
  margin-bottom: 8px;
  flex: 1 auto;
  line-height: 1.3;
`;

const QuestionHeader = (props) => {
    const title = props.data.title;
    // console.log(title)

    return (
        <Header>
            {/*question 제목과 ask question 버튼 섹션*/}
            <Title>
                {/*<a href={}>{props.questionUrl}</a>*/}
                <a href={'https://stackoverflow.com/questions/74858687/insert-data-into-deep-nested-relationships'}>
                    {title}
                </a>
            </Title>

            {/*<a href={ask question link 로 이동}></a>*/}
            <Link to={'/questions/ask'}>
                <BlueBtn>Ask Question</BlueBtn>
            </Link>
        </Header>
    )
};

export default QuestionHeader;