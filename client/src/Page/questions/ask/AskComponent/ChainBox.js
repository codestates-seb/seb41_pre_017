import styled from "styled-components";
import formData from "./formData";
import AdviceBox from "./AdviceBox";
import InputBox from "./InputBox";
import { useState } from "react";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    .box {
        display: flex; 
        flex-direction: row;
        align-items: flex-start
    }
`
// input박스로 내려주고 조건부 렌더링
// chainBox 

const ChainBox = ({inputData, setInputData}) => {
    const [isHide, setIsHide] = useState([true,false,false,false]);

    return (
        <Wrapper> 
            {
                formData.map((data,idx) => {
                    return (
                        <div key={idx} className="box">
                            <InputBox 
                                idx={idx} 
                                setIsHide={setIsHide} 
                                data={data[0]} 
                                inputData={inputData} 
                                setInputData={setInputData} />
                            <AdviceBox 
                                idx={idx} 
                                isHide={isHide} 
                                data={data[1]} />
                        </div>
                    );
                })
            }
        </Wrapper>
    )
};

export default ChainBox;