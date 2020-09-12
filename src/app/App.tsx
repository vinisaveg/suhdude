import React, { FunctionComponent } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Wrapper from './styles';

import MainPage from '../pages/MainPage/MainPage';
import UserPanel from '../pages/UserPanel/UserPanel';
import ChatPage from '../pages/ChatPage/ChatPage';
import MessagesPage from '../pages/MessagesPage/MessagesPage';
import SettingsPanel from '../pages/SettingsPanel/SettingsPanel';

const App: FunctionComponent = () => {
    return (
        <Wrapper>
            <MainPage>
                <UserPanel />
                <ChatPage />

                <Router>
                    <Switch>
                        <Route path="/" children={<MessagesPage />} />
                    </Switch>
                </Router>

                <SettingsPanel />
            </MainPage>
        </Wrapper>
    );
};

export default App;
