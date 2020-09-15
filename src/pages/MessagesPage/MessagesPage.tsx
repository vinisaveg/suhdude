import database from '../../environment/firebase';
import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import Message from '../../components/Message/Message.component';

import Page, {
    CurrentChatName,
    MessageInput,
    MessageInputWrapper,
    PageWrapper,
} from './styles';

const MessagesPage: FunctionComponent = () => {
    const pageRef = useRef<HTMLDivElement>(null);
    const [chatName, setChatName] = useState('');

    const { chatId } = useParams<{ chatId: string }>();

    useEffect(() => {
        pageRef.current?.scrollTo(0, pageRef.current.scrollHeight);

        if (chatId) {
            database
                .collection('chats')
                .doc(chatId)
                .onSnapshot((snapshot) => {
                    setChatName(snapshot.data()?.name);
                    console.log(snapshot);
                });
        }
    }, [chatId]);

    return (
        <PageWrapper>
            <Page ref={pageRef}>
                <CurrentChatName>{chatName}</CurrentChatName>

                <Message isUser />
                <Message />
                <Message isUser />
                <Message />
            </Page>

            <MessageInputWrapper>
                <MessageInput type="text" placeholder="Type something..." />
            </MessageInputWrapper>
        </PageWrapper>
    );
};

export default MessagesPage;
