import styled, { StyledComponent } from 'styled-components';

const ChatWrapper: StyledComponent<'div', {}, {}> = styled.div<{}>`
    width: 97%;
    height: 80px;
    display: flex;
    align-items: center;
    border-radius: 50px 0 0 50px;
    background-color: #6569cb;
    padding: 20px;
    color: #ffffff;
    margin: 15px 0px;
`;

export const AvatarWrapper: StyledComponent<'div', {}, {}> = styled.div<{}>`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
`;

export const Avatar: StyledComponent<'img', {}, {}> = styled.img<{}>`
    width: 50px;
    height: 50px;
`;

export default ChatWrapper;
