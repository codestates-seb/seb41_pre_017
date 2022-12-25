import styled from 'styled-components';
import { CodeToHtml } from '../../component/textConverter';
import Vote from './vote/Vote';
import TagNav from '../../component/tagNav';
import ProfilePicture from '../img/unnamed.png';

const Section = styled.section`
    max-width: 1100px;
    width: calc(100% - 164px);
    height: 100%;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
`;

const Post = styled.div`
    line-height: 30px;
    margin: 50px 20px;
`;

const Container = styled.div`
    display: flex;
    margin-bottom: 50px;
`;

const Tags = styled.nav`
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
`;

const UserCard = styled.article`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    button {
        margin-right: 15px;
        margin-left: 5px;
    }
`;
const User = styled.div`
    display: flex;
    padding: 8px;
    width: 200px;
    border-radius: 5px;
    background-color: rgb(191, 217, 236);
    div {
        color: rgb(0 116 204);
        font-size: 13px;
        margin: 5px;
    }
    span {
        margin: 5px;
    }
`;
const Button = styled.button`
    cursor: pointer;
`;

const H1 = styled.h1`
    margin-left: 50px;
    font-weight: 100;
`;
// 컨텐츠 영역 (투표,질문&답변내용, 수정버튼, 유저 정보)
const Content = ({ data, dataHandler, answerData, index }) => {
    // Vote 투표수정을 위해 answerData는 원본 데이터가 필요, questionData데이터는 에초에 원본데이터

    // CodeToHtml = 코드화된 데이터 파싱
    const contentData = CodeToHtml(data.content);
    return (
        <Container>
            {/* 투표기능 */}
            <Vote data={answerData ? answerData : data} index={index} dataHandler={dataHandler}></Vote>
            <div>
                {/* 질문&답변  contentData 출력 */}
                <Post dangerouslySetInnerHTML={{ __html: contentData }} />
                {/* 질문&답변  태그들 출력 */}
                <Tags className="tags">{data.tags ? data.tags.map((tag) => <TagNav key={tag}>{tag}</TagNav>) : null}</Tags>
                {/* 유저기능 = 질문&답변 수정, 해당유저 정보 */}
                <UserCard>
                    <ul>
                        <Button>Share</Button>
                        <Button>Edit</Button>
                        <Button>Follow</Button>
                    </ul>
                    <User>
                        <img src={ProfilePicture} alt="profile" />
                        <div>
                            <div>{data.user}</div>
                            <span>
                                {/* 업적 = 랜덤함수로 임의의 숫자를 생성 API가 구현된다면 바꿔야됨 */}
                                {Math.floor(Math.random() * 101)}🥇 {Math.floor(Math.random() * 101)}🥈 {Math.floor(Math.random() * 101)}🥉
                            </span>
                        </div>
                    </User>
                </UserCard>
            </div>
        </Container>
    );
};

const ContentList = ({ dataList, dataHandler }) => {
    const questionData = dataList.questionData;
    const answerData = dataList.answerData;

    return (
        <Section>
            {/*질문 */}
            <Content data={questionData} dataHandler={dataHandler.setQuestionData} />
            {/* 답변 */}
            <H1>{answerData.length} Answers</H1>
            {answerData.map((el, index) => (
                <Content key={el.id} data={el} dataHandler={dataHandler.setAnswerData} answerData={answerData} index={index} />
            ))}
        </Section>
    );
};

export default ContentList;
