import styled from "styled-components";
import TextEditor from "./TextEditor";
import StyledButton from "./Btn";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 850px;
    padding: 24px;
    margin-bottom: 15px;
    border: 1px solid #E3E6E8;

    /* 첫번째 라벨 */
    >:first-child {
        font-weight: 800;
        margin-bottom: 2px;
    }

    /* 두번째 라벨 */
    >:nth-child(2){
        font-size: 14px;
    }

    input {
        border: 1px solid var(--theme-border);
        height: 25px;
        width: 840px;
        border-radius: 3px;
        margin: 7px 0px 10px 0px;
        padding-left: 10px;
    }
`

const InputBox = ({data, setIsHide, idx, setInputData, inputData}) => {

    const handleText = (e) => {
        let updatedData = inputData;
        updatedData[data.id] = e.target.value;
        setInputData(updatedData);
        // console.log(inputData);
    };

    const handleHide = () => {
        const setting = [false, false, false, false];
        setting[idx] = true;
        setIsHide(setting);
    };

    return (
        <Wrapper>
            <label htmlFor={data.id}>{data.label1}</label>
            <label htmlFor={data.id}>{data.label2}</label>
            {
                data.type === 0 ? 
                <input 
                    onChange={handleText} 
                    onFocus={handleHide} 
                    value={inputData[data.id]} 
                    type="text" id={data.id} 
                    placeholder={data.placeholder} 
                />
                :<TextEditor
                    data={data} 
                    handleHide={handleHide} 
                    handleText={handleText} 
                />
            }
            <StyledButton>Next</StyledButton>
        </Wrapper>
    )
};

export default InputBox;