const QuestionHeader = () => {
    return (
        <div className={'question-header'}>
            {/*question 제목과 ask question 버튼 섹션*/}
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
    )
};

export default QuestionHeader;