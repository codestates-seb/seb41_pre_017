import Widget from "./Widget";
import Related from "./Related";
import HotNetworkQuestion from "./HotNetworkQuestion";

const SideBar = () => {
    return (
        <aside>
            <Widget/>
            <Related/>
            <HotNetworkQuestion/>
        </aside>
    )
};

export default SideBar;