import React, { FunctionComponent } from 'react';

import Wrapper from './styles';

const App: FunctionComponent = () => {
    const appInitializer = (appName: string) => {
        return (status: string) => `${appName} ${status}`;
    };

    return (
        <Wrapper primary>
            <h1>{appInitializer('Suhdude')('Initialized')}</h1>
        </Wrapper>
    );
};

export default App;
