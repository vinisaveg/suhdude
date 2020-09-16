import styled, { StyledComponent } from 'styled-components';

const Page: StyledComponent<'div', {}, {}> = styled.div<{}>`
    width: 600px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    background-color: #787bd8;
    border-radius: 24px 24px 24px 0px;
`;

export const SignInButton: StyledComponent<
    'button',
    {},
    { method: string }
> = styled.button<{ method: string }>`
    padding: 10px 20px;
    margin: 10px 0px;
    outline: none;
    border: none;
    border-radius: 8px;
    transition: 150ms ease;
    opacity: 0.9;
    cursor: pointer;
    background-color: ${(props) =>
        props.method === 'google' ? '#ffffff' : '#222222'};
    color: ${(props) => (props.method === 'google' ? '#222222' : '#ffffff')};

    &&:hover {
        opacity: 1;
    }
`;

export default Page;
