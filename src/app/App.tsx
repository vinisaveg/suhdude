import React, { FunctionComponent } from 'react';

import Wrapper from './styles';

import MainPage from '../pages/MainPage/MainPage';
import UserPanel from '../pages/UserPanel/UserPanel';
import ChatPage from '../pages/ChatPage/ChatPage';
import MessagesPage from '../pages/MessagesPage/MessagesPage';
import SettingsPanel from '../pages/SettingsPanel/SettingsPanel';

const App: FunctionComponent = () => {
    // const appInitializer = (appName: string) => {
    //     return (status: string) => `${appName} ${status}`;
    // };
    // const Hello: JSX.Element = <h1>{appInitializer('Suhdude')('Initialized')}</h1>;

    return (
        <Wrapper>
            <MainPage>
                <UserPanel />
                <ChatPage />
                <MessagesPage />
                <SettingsPanel />
            </MainPage>
        </Wrapper>
    );
};

export default App;
