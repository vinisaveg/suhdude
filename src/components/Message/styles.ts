import styled, { StyledComponent, Keyframes, keyframes } from 'styled-components';

const showUpAnimation: Keyframes = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

const MessageWrapper: StyledComponent<'div', {}, { isUser?: boolean }> = styled.div<{
    isUser?: boolean;
}>`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: ${(props) => (props.isUser ? 'flex-end' : 'flex-start')};
    padding: 10px 0px;
    margin-bottom: 5px;
    opacity: 0;
    animation: ${showUpAnimation} 250ms forwards;
    transition: 150ms ease-in-out;
`;

export const AvatarWrapper: StyledComponent<
    'div',
    {},
    { isUser?: boolean }
> = styled.div<{
    isUser?: boolean;
}>`
    order: ${(props) => (props.isUser ? 1 : 0)};
    width: 50px;
    min-width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    align-self: flex-end;
`;

export const Avatar: StyledComponent<'img', {}, {}> = styled.img<{}>`
    width: 50px;
    min-width: 50px;
    user-select: none;
`;

export const MessageBallon: StyledComponent<
    'div',
    {},
    { isUser?: boolean }
> = styled.div<{
    isUser?: boolean;
}>`
    width: auto;
    height: auto;
    padding: 15px;
    margin: ${(props) => (props.isUser ? '10px 10px 0px 0px' : '0px 0px 10px 10px')};
    background-color: ${(props) => (props.isUser ? '#777BD8' : '#eaeaea')};
    border-radius: ${(props) =>
        props.isUser ? '12px 12px 0px 12px' : '12px 12px 12px 0px'};
    color: ${(props) => (props.isUser ? '#ffffff' : '#383952')};
    text-align: left;
`;

export default MessageWrapper;
