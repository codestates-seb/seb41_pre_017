import {Fragment} from "react";

const QuestionContent = () => {
    return (
        <Fragment>
            {/*question 내용 섹션*/}
            <div className={'question-cell'}>
                <div className={'question-container'}>
                    <p>This is my question!!</p>
                    <p>This is my question!!</p>
                </div>
            </div>

            {/*해당 question 에 저장된 tag 목록*/}
            <div className={'tag-wrapper'}>
                <div className={'tag-container'}>
                    <div className={'tag-content'}>
                        <ul className={'tag-list'}>
                            <li className={'tag-element'}>node.js</li>
                            <li className={'tag-element'}>react</li>
                            <li className={'tag-element'}>javascript</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/*question posting share, edit, follow 버튼과 작성자 프로필*/}
            <div className={'post-user-menu'}>
                <div className={'post-menu-wrapper'}>
                    <div className={'post-menu-container'}>
                        <div className={'post-menu'}>Share</div>
                        <div className={'post-menu'}>Edit</div>
                        <div className={'post-menu'}>Follow</div>
                    </div>
                </div>

                {/*작성자 프로필 카드 섹션*/}
                <div className={'user-profile-container'}>
                    <div className={'user-info'}>
                        <div className={'user-action-time'}>
                            <span>asked 2 hours ago</span>
                        </div>
                        <div className={'user-avatar'}>
                            {/*<a href={userprofile link 삽입}></a>*/}
                            <div className={'user-img-wrapper'}>
                                {/*<img src={'유저 이미지 링크 삽입'}/>*/}
                                <span>use image part</span>
                            </div>
                            <div className={'user-detail'}>
                                {/*<a href={'유저 이름 클릭시 해당 유저 프로필 link 삽입'}>
                                            {username}
                                            </a>*/}
                                <span>steven</span>
                                <div className={'user-reputation'}>
                                    11
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default QuestionContent;