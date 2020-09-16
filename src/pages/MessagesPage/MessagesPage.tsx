import database from '../../environment/firebase';
import React, {
    FunctionComponent,
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react';
import { useParams } from 'react-router-dom';

import Message from '../../components/Message/Message.component';

import Page, {
    CurrentChatName,
    MessageInput,
    MessageInputWrapper,
    PageWrapper,
} from './styles';

import { AppContext } from '../../context/AppContext';

import firebase from 'firebase';

interface MessageType {
    id: string;
    data: firebase.firestore.DocumentData;
}

const MessagesPage: FunctionComponent = () => {
    const { state } = useContext(AppContext);

    const pageRef = useRef<HTMLDivElement>(null);
    const messageInputRef = useRef<HTMLInputElement>(null);

    const [chatName, setChatName] = useState('');
    const [messages, setMessages] = useState<Array<MessageType>>([]);
    const [inputMessage, setInputMessage] = useState('');

    const { chatId } = useParams<{ chatId: string }>();

    const submitMessage = (event: any) => {
        event.preventDefault();
        setInputMessage('');

        database
            .collection('chats')
            .doc(chatId)
            .collection('messages')
            .add({
                name: state.user.displayName || 'no name',
                message: inputMessage,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });
    };

    const inputMessageHandler = () => {
        let inputCurrentMessage = messageInputRef?.current?.value || '';
        setInputMessage(inputCurrentMessage);
    };

    useEffect(() => {
        pageRef.current?.scrollTo(0, pageRef.current.scrollHeight);

        if (chatId) {
            database
                .collection('chats')
                .doc(chatId)
                .onSnapshot((snapshot) => {
                    setChatName(snapshot.data()?.name);
                });

            database
                .collection('chats')
                .doc(chatId)
                .collection('messages')
                .orderBy('timestamp', 'asc')
                .onSnapshot((snapshot) => {
                    let newMessages = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }));

                    setMessages(newMessages);
                });
        }
    }, [chatId]);

    return (
        <PageWrapper>
            <Page ref={pageRef}>
                <CurrentChatName>{chatName}</CurrentChatName>

                {messages.map((message) => (
                    <Message
                        isUser={
                            message.data.name === state.user.displayName
                                ? true
                                : false
                        }
                        key={message.id}
                        message={message.data.message}
                    />
                ))}
            </Page>

            <MessageInputWrapper onSubmit={submitMessage}>
                <MessageInput
                    value={inputMessage}
                    ref={messageInputRef}
                    onChange={inputMessageHandler}
                    type="text"
                    placeholder="Type something..."
                />
            </MessageInputWrapper>
        </PageWrapper>
    );
};

export default MessagesPage;
