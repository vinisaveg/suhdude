import React, { FunctionComponent } from 'react';

import Page, { ChatsWrapper } from './styles';

import Chat from '../../components/Chat/Chat.component';

const ChatPage: FunctionComponent = () => {
    return (
        <Page>
            <ChatsWrapper>
                <Chat avatar="avatar" chatName="name" />
                <Chat avatar="avatar" chatName="name" />
                <Chat avatar="avatar" chatName="name" />
                <Chat avatar="avatar" chatName="name" />
            </ChatsWrapper>
        </Page>
    );
};

export default ChatPage;
