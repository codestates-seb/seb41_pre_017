import styled from "styled-components";
import hotData from "./data/hotNetworkData";


const ModuleHotNetwork = styled.div`
  word-wrap: break-word;
  margin-bottom: 1.5em;

  ul {
    list-style: none;

    li {
      display: flex;
      align-items: flex-start;
      
      span {
        min-width: 0;
        margin-bottom: 10px;
        overflow-wrap: break-word;
        font-size: 13px;
        color: blue;
        cursor: pointer;
      }

      img {
        width: 20px;
        margin: -3px 5px 0px 0px;
      }
    }
  }
`;

const HotNetworkTitle = styled.h4`
  color: hsl(210,8%,25%);
  font-size: 1.46153846rem;
  font-weight: 400;
  margin-bottom: 1em;
  margin-top: 0;
  display: block;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const HotNetworkQuestion = () => {
    return (
        <ModuleHotNetwork>
            <HotNetworkTitle>Hot Network Connections</HotNetworkTitle>
            <ul>
            {
                hotData.map((el,idx) => {
                  return (
                      <li key={idx}>
                        <img src={el.img} alt="img" />
                        <span>{el.title}</span>
                      </li>
                  )
                })
              }
            </ul>
        </ModuleHotNetwork>
    )
};

export default HotNetworkQuestion;