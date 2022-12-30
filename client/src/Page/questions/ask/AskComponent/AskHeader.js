import styled from "styled-components";

const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 1267px;
    height: 130px;
    margin-bottom: 10px;
    font-family: LiverationSans;

    h1 {
        display: inline-block;
        font-size: 30px;
        height: 35px;
        margin: 24px 300px 24px 0px;
    }

    img {
        margin-left: 120px;
        width: 550px;
        height: 130px;
    }
`

const BlueBox = styled.div`
    width: 850px;
    padding: 24px;
    margin-right: 365px;
    margin-bottom: 15px;
    background-color: #EBF4FB;
    border: 1px solid #A6CEED;
    border-radius: 3px;
    text-align: left;

    h2 {
        margin-bottom: 8px;
        font-weight: 400;
    }

    p:nth-of-type(2) {
        margin-bottom: 15px;
    }

    h5 {
        font-weight: 600;
        font-size: 100%;
        margin-bottom: 8px;
    }

    ul {
        padding : 0px 0px 0px 30px;
    }

    a {
        color: var(--theme-link-text);
    }
`

const AskHeader = () => {
    return (
        <>  
            <Header>
                <h1>Ask a public question</h1>
                <img src="https://cdn.sstatic.net/Img/ask/background.svg?v=2e9a8205b368" alt="curious robot"/>
            </Header>
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
        </>
    )
}

export default AskHeader;