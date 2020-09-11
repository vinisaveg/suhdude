import React, { FunctionComponent } from 'react';
import Page from './styles';

const MainPage: FunctionComponent = ({ children }) => {
    return <Page>{children}</Page>;
};

export default MainPage;
