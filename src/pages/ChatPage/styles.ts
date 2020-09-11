import styled, { StyledComponent } from 'styled-components';

const Page: StyledComponent<'div', {}, {}> = styled.div<{}>`
    position: relative;
    width: 30%;
    height: 100%;
    display: flex;
    flex-flow: column wrap;
    padding: 30px 0px;
    background-color: #8f93e7;
    border-radius: 24px 0px 0px 0px;
`;

export const ChatsWrapper: StyledComponent<'div', {}, {}> = styled.div<{}>`
    width: 100%;
    height: auto;
    display: flex;
    flex-flow: column wrap;
    align-items: flex-end;
`;

export default Page;
