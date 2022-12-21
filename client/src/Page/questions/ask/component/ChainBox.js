import styled from "styled-components";
import formData from "./formData";
import AdviceBox from "./AdviceBox";
import InputBox from "./InputBox";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    .box {
        display: flex; 
        flex-direction: row;
    }
`

const ChainBox = () => {
    return (
        <Wrapper> 
            {
                formData.map((data) => {
                    return (
                        <div className="box">
                            <InputBox data={data[0]} />
                            <AdviceBox data={data[1]} />
                        </div>
                    );
                })
            }
        </Wrapper>
    )
};

export default ChainBox;