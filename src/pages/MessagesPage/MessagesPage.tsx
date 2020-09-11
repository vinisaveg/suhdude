import React, { FunctionComponent } from 'react';
import Message from '../../components/Message/Message.component';
import Page, { CurrentChatName } from './styles';

const MessagesPage: FunctionComponent = () => {
    return (
        <Page>
            <CurrentChatName>Scary Terry</CurrentChatName>

            <Message isUser />
            <Message />
            <Message />
            <Message isUser />
            <Message isUser />
            <Message />
        </Page>
    );
};

export default MessagesPage;
