import styled, { StyledComponent } from 'styled-components';

const Page: StyledComponent<'div', {}, {}> = styled.div<{}>`
    width: 50%;
    height: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    text-align: center;
    background-color: #f5f5f5;
`;

export default Page;
