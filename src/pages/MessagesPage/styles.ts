import styled, { StyledComponent } from 'styled-components';

const Page: StyledComponent<'div', {}, {}> = styled.div<{}>`
    position: relative;
    width: 100%;
    height: auto !important;
    display: flex;
    flex-flow: column;
    overflow-y: scroll;
    /* scroll-behavior: smooth; */
    padding: 30px 30px 80px 30px;
    text-align: center;
    background-color: #f5f5f5;

    /* Testing scrollbars */
    ::-webkit-scrollbar {
        width: 0px;
        background: transparent;
    }
`;

export const CurrentChatName: StyledComponent<'h1', {}, {}> = styled.h1<{}>`
    font-size: 24px;
    color: #383952;
    text-align: left;
    margin-bottom: 30px;
`;

export const MessageInputWrapper: StyledComponent<
    'form',
    {},
    {}
> = styled.form<{}>`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
`;

export const MessageInput: StyledComponent<'input', {}, {}> = styled.input<{}>`
    width: 90%;
    bottom: 20px;
    padding: 20px;
    border-radius: 30px;
    border: 1px solid #c7c7c7;
    outline: none;
    color: #383952;
    font-family: Roboto;

    &::placeholder {
        font-family: Roboto;
        color: #a3a3a5;
    }
`;

export const PageWrapper: StyledComponent<'div', {}, {}> = styled.div<{}>`
    position: relative;
    width: 50%;
    height: auto !important;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    text-align: center;
    background-color: #f5f5f5;
`;

export default Page;
