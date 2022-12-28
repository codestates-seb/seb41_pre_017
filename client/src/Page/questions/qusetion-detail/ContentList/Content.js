import styled from 'styled-components';
import { CodeToHtml } from '../../../components/function/textConverter';
import Vote from '../vote';
import TagNav from '../../../components/style/tagNav';
import ProfilePicture from '../../img/unnamed.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TimeForToday from '../../../components/function/timeForToday';
const Post = styled.div`
    line-height: 30px;
    margin: 0px 20px;
`;

const Container = styled.div`
    display: flex;
    padding-bottom: 50px;
    width: 100%;
    justify-content: space-between;
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
    margin-left: 10px;
    width: 100%;
    button {
        margin-right: 15px;
        margin-left: 5px;
    }
`;
const User = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 8px;
    width: 200px;
    border-radius: 5px;
    background-color: rgb(213, 229, 241);

    div {
        color: rgb(0 116 204);
        font-size: 10px;
        margin-left: 5px;
        margin-bottom: 2px;
    }
    span {
        margin: 5px;
    }
    .time {
        color: rgb(106 115 124);
    }
`;
const Button = styled.button`
    cursor: pointer;
`;
const UserContainer = styled.div`
    display: flex;
`;
const ProfileImg = styled.img`
    width: 35px;
    height: 35px;
`;

const PostBody = styled.div`
    flex-grow: 1;
`;

const Content = ({ category, data, dataHandler, answerData, index }) => {
    const Modified = TimeForToday(new Date(data.modifiedAt));
    console.log(Modified);
    // CodeToHtml = 코드화된 데이터 파싱
    const contentData = CodeToHtml(data.content);
    const [feat, setFeat] = useState([Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)]);
    const navigate = useNavigate();
    const Delete = () => {
        if (category === 'question') {
            axios.delete(`http://localhost:8080/questions/${data.questionId}`);
            navigate('/questions');
        } else if (category === 'answer') {
            axios.delete(`http://localhost:8080/answers/${data.answerId}`);
            const deleted = answerData.filter((el) => el !== data);
            dataHandler([...deleted]);
        }
    };
    return (
        <Container>
            {/* 투표기능 */}
            <Vote data={category === 'answer' ? answerData : data} index={index} dataHandler={dataHandler}></Vote>
            <PostBody>
                {/* 질문&답변  contentData 출력 */}
                <Post dangerouslySetInnerHTML={{ __html: contentData }} />
                {/* 질문&답변  태그들 출력 */}
                <Tags className="tags">{data.tags ? data.tags.map((tag) => <TagNav key={tag}>{tag}</TagNav>) : null}</Tags>
                {/* 유저기능 = 질문&답변 수정, 해당유저 정보 */}
                <UserCard>
                    <ul>
                        {/* <Button>Share</Button> */}
                        <Link
                            to={`/questions/edit/${category}/${data.questionId}`}
                            state={{
                                category: category,
                                data: data,
                            }}
                        >
                            <Button>Edit</Button>
                        </Link>
                        <Button onClick={Delete}>Delete</Button>
                        {/* <Button>Follow</Button> */}
                    </ul>
                    <User>
                        <div className="time">
                            {category === 'answer' ? 'answered : ' : 'asked : '}
                            {Modified}
                        </div>

                        <UserContainer>
                            <ProfileImg src={ProfilePicture} alt="profile" />
                            <div>
                                <div>{data.nickname}</div>
                                <span>
                                    {/* 업적 = 랜덤함수로 임의의 숫자를 생성 API가 구현된다면 바꿔야됨 */}
                                    {feat[0]}🥇 {feat[1]}🥈 {feat[2]}🥉
                                </span>
                            </div>
                        </UserContainer>
                    </User>
                </UserCard>
            </PostBody>
        </Container>
    );
};

export default Content;
