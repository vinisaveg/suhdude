import styled, { StyledComponent } from 'styled-components';

const Panel: StyledComponent<'div', {}, {}> = styled.div<{}>`
    width: 10%;
    height: 100%;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    padding: 30px 0px;
    background-color: #787bd8;
    text-align: center;
    color: #ffffff;
`;

export const AvatarWrapper: StyledComponent<'div', {}> = styled.div<{}>`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
`;

export const Avatar: StyledComponent<'img', {}, {}> = styled.img<{}>`
    width: 60px;
    height: 60px;
`;

export default Panel;
