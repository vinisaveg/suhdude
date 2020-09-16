import styled, { StyledComponent } from 'styled-components';

const ChatWrapper: StyledComponent<
    'div',
    {},
    { isSelected: boolean }
> = styled.div<{
    isSelected: boolean;
}>`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    border-radius: 50px 0 0 50px;
    background-color: ${(props) => (props.isSelected ? '#6569CB' : '')};
    padding: 20px;
    color: #ffffff;
    margin: 10px 0px;
    cursor: pointer;

    &:hover {
        background-color: ${(props) =>
            props.isSelected ? '#6569CB' : '#9b9fed'};
    }
`;

export const AvatarWrapper: StyledComponent<'div', {}, {}> = styled.div<{}>`
    width: 50px;
    min-width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
`;

export const Avatar: StyledComponent<'img', {}, {}> = styled.img<{}>`
    width: 50px;
    min-width: 50px;
    user-select: none;
`;

export const InfoWrapper: StyledComponent<'div', {}, {}> = styled.div<{}>`
    display: flex;
    flex-flow: column;
    margin-left: 10px;
`;

export const ChatName: StyledComponent<'span', {}, {}> = styled.span<{}>`
    color: #ffffff;
    font-size: 16px;
    font-weight: 500;
    user-select: none;
`;

export const ChatLastMessage: StyledComponent<'span', {}, {}> = styled.span<{}>`
    color: #e4e4e4;
    font-size: 14px;
    margin-top: 5px;
    max-width: 170px;
    max-height: 18px;
    overflow-x: hidden;
    overflow-y: hidden;
    user-select: none;
`;

export const LastMessageTime: StyledComponent<'span', {}, {}> = styled.span<{}>`
    flex: 1;
    align-self: flex-start;
    color: #e4e4e4;
    font-size: 14px;
    text-align: right;
    user-select: none;
`;

export default ChatWrapper;
