import React, { FunctionComponent, useEffect, useRef } from 'react';
import Message from '../../components/Message/Message.component';
import Page, {
    CurrentChatName,
    MessageInput,
    MessageInputWrapper,
    PageWrapper,
} from './styles';

const MessagesPage: FunctionComponent = () => {
    const pageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        pageRef.current?.scrollTo(0, pageRef.current.scrollHeight);
    }, []);

    return (
        <PageWrapper>
            <Page ref={pageRef}>
                <CurrentChatName>Scary Terry</CurrentChatName>

                <Message isUser />
                <Message />
                <Message isUser />
                <Message />
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
