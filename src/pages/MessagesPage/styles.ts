import styled, { StyledComponent } from 'styled-components';

const Page: StyledComponent<'div', {}, {}> = styled.div<{}>`
    position: relative;
    width: 50%;
    height: auto !important;
    display: flex;
    flex-flow: column;
    overflow-y: scroll;
    scroll-behavior: smooth;
    padding: 30px 30px;
    text-align: center;
    background-color: #f5f5f5;
`;

export const CurrentChatName: StyledComponent<'h1', {}, {}> = styled.h1<{}>`
    font-size: 24px;
    color: #383952;
    text-align: left;
    margin-bottom: 30px;
`;

export default Page;
