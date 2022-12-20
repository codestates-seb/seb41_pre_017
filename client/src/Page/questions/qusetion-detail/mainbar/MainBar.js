import Vote from "../vote/Vote";
import QuestionContent from "../QuestionContent";
import Answer from "../answer/Answer";

const MainBar = () => {
    return (
        <main>
            {/*단일 question 항목 렌더링*/}
            <div className={'question-detail-container'}>
                <div className={'post-layout'}>
                    <Vote/>
                    <QuestionContent/>
                    <Answer/>
                </div>
            </div>
        </main>
    )
};

export default MainBar;