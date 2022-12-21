import styled from "styled-components";
import heading from "../img/textEditor/types.png";
import bold from "../img/textEditor/bold-text.png";
import italic from "../img/textEditor/italic.png";
import inlineCode from "../img/textEditor/html-coding.png";
import link from "../img/textEditor/link.png";
import quote from "../img/textEditor/quote.png";
import insertImage from "../img/textEditor/insert-picture-icon.png";
import grid from "../img/textEditor/pixels.png";
import numlist from "../img/textEditor/numlist.png";
import list from "../img/textEditor/list.png";
import more from "../img/textEditor/more.png";
import help from "../img/textEditor/help-web-button.png";

// 영역을 두개로 나눈다
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px 0px 5px 0px;
    border: 1px solid var(--theme-border);
`

const Buttons = styled.div`
    margin-top: 6px;
    width: 850px;
    height: 35px;

    button {
        background-color: white;
        width: 30px;
        height: 24px;
        padding: 3px;
        margin: 3px 3px 3px 6px;

        img {
            width: 18px;
            height: 18px;
        }
    }

    button:hover {
        cursor: pointer;
        background-color: #efefef;
    }
`

const TextArea = styled.textarea`
        border-radius: 3px;
        width: 845px;
        height: 220px;
`

const TextEditor = ({data, handleHide, handleText}) => {
    return (
        <Wrapper>
            <Buttons>
                <button type="button">
                    <img src={heading} alt="heading" />
                </button>
                <button>
                    <img src={bold} alt="bold" />
                </button>
                <button>
                    <img src={italic} alt="italic" />
                </button>
                <button>
                    <img src={inlineCode} alt="inlineCode" />
                </button>
                <button>
                    <img src={link} alt="link" />
                </button>
                <button>
                    <img src={quote} alt="quote" />
                </button>
                <button>
                    <img src={insertImage} alt="insertImage" />
                </button>
                <button>
                    <img src={grid} alt="grid" />
                </button>
                <button>
                    <img src={numlist} alt="numlist" />
                </button>
                <button>
                    <img src={list} alt="list" />
                </button>
                <button>
                    <img src={more} alt="more" />
                </button>
                <button>
                    <a href="https://stackoverflow.com/editing-help"> <img src={help} alt="help" /></a>
                </button>
            </Buttons>
            <TextArea onFocus={handleHide} onChange={handleText} id={data.id} placeholder={data.placeholder}></TextArea>
        </Wrapper>
    )
}

export default TextEditor;

