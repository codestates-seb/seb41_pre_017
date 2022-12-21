import QuestionHeader from "./QuestionHeader";
import AskModiView from "./AskModiView";
import SideBar from "./sidebar/SideBar";
import MainBar from "./mainbar/MainBar";

const questionDetail = (props) => {
    return (
        <div className={'inner-content'}>
            <QuestionHeader/>
            <AskModiView/>
            <MainBar/>
            <SideBar/>
        </div>
    )
};

export default questionDetail;