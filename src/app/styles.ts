import styled, { StyledComponent } from 'styled-components';

const Wrapper: StyledComponent<'main', {}, { primary?: boolean }> = styled.main<{
    primary?: boolean;
}>`
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${(props) => (props.primary ? '#f5f5f5' : '#222')};
    color: #383952;
`;

export default Wrapper;
