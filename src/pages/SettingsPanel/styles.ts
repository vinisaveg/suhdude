import styled, { StyledComponent } from 'styled-components';

const Panel: StyledComponent<'div', {}, {}> = styled.div<{}>`
    width: 10%;
    height: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    text-align: center;
    background-color: #eeeeee;
`;

export default Panel;
