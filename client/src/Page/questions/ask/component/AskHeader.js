import styled from "styled-components";

const BlueBox = styled.div`
    width: 100% !important;
    background-color: #EBF4FB;
    border: #A6CEED;
    text-align: left;
`


const AskHeader = () => {
    return (
        <BlueBox>
            <h2>Writing a good question</h2>
            <p> You're ready to
                <a href="https://stackoverflow.com/help/how-to-ask"> ask </a>
                a
                <a href="https://stackoverflow.com/help/on-topic"> programming-related question </a>
                and this form will help guide you through the process.
            </p>
            <p>
                Looking to ask a non-programming question? See 
                <a href="https://stackexchange.com/sites#technology-traffic"> the topics here </a>
                to find a relevant site.
            </p>
            <h5>Steps</h5>
            <ul>
                <li>Summarize your problem in a one-line title.</li>
                <li>Describe your problem in more detail.</li>
                <li>Describe what you tried and what you expected to happen.</li>
                <li>Add “tags” which help surface your question to members of the community.</li>
                <li>Review your question and post it to the site.</li>
            </ul>
        </BlueBox>
    )
}

export default AskHeader;