import styled from "styled-components";

const UserWrapper = styled.div`
  margin: 4px;
  border-radius: 3px;
  background-color: skyblue;
  text-align: left;
  vertical-align: top;
  width: 200px;
`;

const UserInfo = styled.div`
  box-sizing: border-box;
  padding: 5px 6px 7px 7px;
  color: hsl(210, 8%, 45%);
`;

const UserActionTime = styled.div`
  margin-top: 1px;
  margin-bottom: 4px;
`;

const UserAvatarWrapper = styled.div`
  float: left;
  width: 32px;
  height: 32px;
  border-radius: 1px;
`;

const UserAvatarImg = styled.div`
  width: 32px;
  height: 32px;
  overflow: hidden;
`;

const UserDetail = styled.div`
  margin-left: 8px;
  width: calc(100% - 40px);
  float: left;
  line-height: 17px;
  word-wrap: break-word;
`;

const PostUser = (props) => {
    const {userData, askedData} = props;

    return (
        <UserWrapper>
            {/*작성자 프로필 카드 섹션*/}
            <UserInfo>
                <UserActionTime>
                    <span>{askedData}</span>
                </UserActionTime>
                <UserAvatarWrapper>
                    {/*<a href={userprofile link 삽입}></a>*/}
                    <UserAvatarImg>
                        <img
                            src="https://www.gravatar.com/avatar/4e404fe44b680290c95ef673c6653a28?s=64&amp;d=identicon&amp;r=PG"
                            alt="user2024080's user avatar" width="32" height="32" className="bar-sm"/>
                    </UserAvatarImg>
                </UserAvatarWrapper>
                <UserDetail>
                    {/*<a href={'유저 이름 클릭시 해당 유저 프로필 link 삽입'}>
                                            {username}
                                            </a>*/}
                    <span>{userData}</span>
                    <div className={'user-reputation'}>
                        11
                    </div>
                </UserDetail>
            </UserInfo>
        </UserWrapper>
    )
};

export default PostUser;