const Answer = () => {
    return (
        <form className={'answer-container'}>
            {/*해당 질문에 대한 답변 섹션*/}
            <h2 className={'answer-header'}>Your Answer</h2>
            <textarea className={'answer-editor'}></textarea>
            <div className={'submit-button'}>
                <button className={'submit-answer'}>
                    Post Your Answer
                </button>
            </div>
        </form>
    )
};

export default Answer;