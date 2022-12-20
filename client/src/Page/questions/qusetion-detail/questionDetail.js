const questionDetail = (props) => {
    return (
        <div className={'inner-content'}>

            {/*question 제목과 ask question 버튼 섹션*/}
            <div className={'question-header'}>
                <h1 className={'question-title'}>
                    {/*<a href={}>{props.questionUrl}</a>*/}
                    <a href={'https://stackoverflow.com/questions/74858687/insert-data-into-deep-nested-relationships'}>
                        Insert Data into deep nested relationships
                    </a>
                </h1>
                <div className={'ask-question-button'}>
                    {/*<a href={ask question link 로 이동}></a>*/}
                    <button>Ask Question</button>
                </div>
            </div>

            {/*게시글 수정일, 게시일, 본 사람 수 섹션*/}
            <div className={'asked-modified-viewed-container'}>
                <div className={'asked-container'}>
                    <span className={'amv-title'}>Asked</span>
                    <span className={'amv-date'}>today</span>
                </div>
                <div className={'modified-container'}>
                    <span className={'amv-title'}>Modified</span>
                    <span className={'amv-date'}>today</span>
                </div>
                <div className={'viewed-container'}>
                    <span className={'amv-title'}>Viewed</span>
                    <span className={'viewed-time'}>7 times</span>
                </div>
            </div>

            <div className={'main-bar'}>
                {/*단일 question 항목 렌더링*/}
                <div className={'question-detail-container'}>
                    <div className={'post-layout'}>
                        {/*추천 비추천 버튼 섹션*/}
                        <div className={'vote-cell'}>
                            <div className={'voting-container'}>
                                {/*추천 버튼*/}
                                <button className={'vote-up-button'}>
                                    <svg aria-hidden="true" className="svg-icon iconArrowUpLg" width="36"
                                         height="36" viewBox="0 0 36 36">
                                        <path d="M2 25h32L18 9 2 25Z"></path>
                                    </svg>
                                </button>
                                {/*추천 갯수*/}
                                <div className={'voted-number'}>5</div>
                                {/*비추천 버튼*/}
                                <button className={'vote-down-button'}>
                                    <svg aria-hidden="true" className="svg-icon iconArrowDownLg" width="36"
                                         height="36" viewBox="0 0 36 36">
                                        <path d="M2 11h32L18 27 2 11Z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
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

                            {/*해당 질문에 대한 답변 섹션*/}
                            <form className={'answer-container'}>
                                <h2 className={'answer-header'}>Your Answer</h2>
                                <textarea className={'answer-editor'}></textarea>
                                <div className={'submit-button'}>
                                    <button className={'submit-answer'}>
                                        Post Your Answer
                                    </button>
                                </div>
                            </form>

                            {/*오른쪽 사이드바*/}
                            <div className={'sidebar'}>
                                <div className={'sidebar-widget'}>
                                    <ul className={'sidebar-widget-list'}>
                                        <li>The Overflow Blog</li>
                                        <li>The Overflow Blog</li>
                                        <li>The Overflow Blog</li>
                                        <li>The Overflow Blog</li>
                                        <li>The Overflow Blog</li>
                                    </ul>
                                </div>

                                {/*sidebar related*/}
                                <div className={'sidebar-related'}>
                                    <h4>Related</h4>
                                    <div className={'related-questions'}>
                                        <div className={'related-questions-container'}>
                                            <div className={'votes-score'}>
                                                500
                                            </div>
                                            <span>Solution for other questions!</span>
                                        </div>
                                    </div>
                                </div>

                                {/*sidebar hot network questions*/}
                                <div className={'sidebar-hot-network-questions'}>
                                    <h4>Related</h4>
                                    <div className={'hot-network-questions'}>
                                        <div className={'hot-network-questions-container'}>
                                            <span>hot-network-questions!</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default questionDetail;