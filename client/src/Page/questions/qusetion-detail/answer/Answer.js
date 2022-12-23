import BlueBtn from "../../../component/blueBtn";
import TextBox from "../../../component/TextBox";

//답변 작성 섹션입니다
const Answer = (props) => {
    return (
        <form className={'answer-container'}>
            {/*해당 질문에 대한 답변 섹션*/}
            <h2 className={'answer-header'}>Your Answer</h2>
            <TextBox/>
            <div className={'submit-button'}>
                <BlueBtn>
                    Post Your Answer
                </BlueBtn>
            </div>
        </form>
    )
};

export default Answer;