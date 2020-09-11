import styled, { StyledComponent, Keyframes, keyframes } from 'styled-components';

const showUpAnimation: Keyframes = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

const Page: StyledComponent<'div', {}, {}> = styled.div<{}>`
    position: relative;
    display: flex;
    width: 90%;
    max-width: 1450px;
    height: 80%;
    opacity: 0;
    animation: ${showUpAnimation} 150ms forwards;
    background-color: #787bd8;
    border-radius: 24px 24px 24px 0px;
    overflow: hidden;
`;

export default Page;
