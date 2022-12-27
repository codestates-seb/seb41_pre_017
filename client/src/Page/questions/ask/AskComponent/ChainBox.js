import styled from "styled-components";
import formData from "./formData";
import AdviceBox from "./AdviceBox";
import InputBox from "./InputBox";
import { useState, useRef } from "react";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    .box {
        display: flex; 
        flex-direction: row;
        align-items: flex-start
    }
`
// expect 부분을 지운다.
// thirdInput 부분을 지운다.

const ChainBox = ({inputData, setInputData, title, setTitle, 
    problem, setProblem, tag, setTag, setSubmit}) => {
    const [isHide, setIsHide] = useState([true,false,false]);
    const secondInput = useRef(null);
    const lastInput = useRef(null);

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
                                setInputData={setInputData} 
                                title={title} setTitle={setTitle}
                                problem={problem} setProblem={setProblem}
                                tag={tag} setTag={setTag} 
                                refs={[secondInput, lastInput, setSubmit]}
                                />
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