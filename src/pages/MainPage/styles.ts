import styled, { StyledComponent } from 'styled-components';

const Page: StyledComponent<'div', {}, {}> = styled.div<{}>`
    position: relative;
    display: flex;
    width: 90%;
    max-width: 1450px;
    height: 80%;
    background-color: #787bd8;
    border-radius: 24px 24px 24px 0px;
    overflow: hidden;
`;

export default Page;
