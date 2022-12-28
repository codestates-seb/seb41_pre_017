import styled from "styled-components";

const ModuleHotNetwork = styled.div`
  word-wrap: break-word;
  margin-bottom: 1.5em;
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

const HotNetworkListItem = styled.li`
  margin: 10px 0;
  display: flex;
  padding: 0;
`;

const HotNetworkListIcon = styled.div`
  flex-shrink: 0;
  flex-basis: 8.33333333%;
`;

const pencilIcon = (<svg aria-hidden="true" className="va-text-top svg-icon iconPencilSm" width="14" height="14"
                         viewBox="0 0 14 14">
    <path
        d="m11.1 1.71 1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0ZM2 10.12l6.37-6.43 1.88 1.88L3.88 12H2v-1.88Z"></path>
</svg>);

const HotNetworkListWord = styled.div`
  min-width: 0;
  overflow-wrap: break-word;
  font-size: 13px;
  color: blue;
  cursor: pointer;
`;

const HotNetworkListPencil = (
    <HotNetworkListItem>
        <HotNetworkListIcon>
            {pencilIcon}
        </HotNetworkListIcon>
        <HotNetworkListWord>
            Let’s talk about our favorite terminal tools (Ep. 521)
        </HotNetworkListWord>
    </HotNetworkListItem>
)

const HotNetworkQuestion = () => {
    return (
        <ModuleHotNetwork>
            {/*sidebar hot network questions*/}
            <HotNetworkTitle>Hot Network Connections</HotNetworkTitle>
            {HotNetworkListPencil}
            {HotNetworkListPencil}
            {HotNetworkListPencil}
            {HotNetworkListPencil}
            {HotNetworkListPencil}
            {HotNetworkListPencil}
            {HotNetworkListPencil}
            {HotNetworkListPencil}
            {HotNetworkListPencil}
            {HotNetworkListPencil}
            {HotNetworkListPencil}
            {HotNetworkListPencil}
            {HotNetworkListPencil}
            {HotNetworkListPencil}
        </ModuleHotNetwork>
    )
};

export default HotNetworkQuestion;