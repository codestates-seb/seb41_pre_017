import styled from "styled-components";

const WidgetContainer = styled.div`
  border-color: hsl(47, 65%, 84%);
  background-color: hsl(47, 87%, 94%);
`;

const WidgetList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const WidgetHeader = styled.li`
  font-size: 12px;
  font-weight: bold;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  background-color: hsl(47, 83%, 91%);
  border-color: hsl(47, 65%, 84%);
  border-top: 1px solid hsl(210, 8%, 90%);
  margin: 0;
  padding: 12px 15px;
`;

const WidgetListItem = styled.li`
  margin: 12px 0;
  display: flex;
  padding-left: 16px;
  padding-right: 16px;
`;

const WidgetListIcon = styled.div`
  flex-shrink: 0;
  flex-basis: 8.33333333%;
`;

const pencilIcon = (<svg aria-hidden="true" className="va-text-top svg-icon iconPencilSm" width="14" height="14"
                         viewBox="0 0 14 14">
    <path
        d="m11.1 1.71 1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0ZM2 10.12l6.37-6.43 1.88 1.88L3.88 12H2v-1.88Z"></path>
</svg>);

const WidgetListWord = styled.div`
  min-width: 0;
  overflow-wrap: break-word;
  font-size: 13px;
  cursor: pointer;
`;

const WidgetListPencil = (
    <WidgetListItem>
        <WidgetListIcon>
            {pencilIcon}
        </WidgetListIcon>
        <WidgetListWord>
            Let’s talk about our favorite terminal tools (Ep. 521)
        </WidgetListWord>
    </WidgetListItem>
)

const Widget = () => {
    return (
        <WidgetContainer>
            <WidgetList>
                <WidgetHeader>The Overflow Blog</WidgetHeader>
                {WidgetListPencil}
                {WidgetListPencil}
                <WidgetHeader>Featured On Meta</WidgetHeader>
                {WidgetListPencil}
                {WidgetListPencil}
                {WidgetListPencil}
                {WidgetListPencil}
                {WidgetListPencil}
                {WidgetListPencil}
            </WidgetList>
        </WidgetContainer>
    )
};

export default Widget;