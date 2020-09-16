import React, { FunctionComponent, useContext } from 'react';
import { Link } from 'react-router-dom';

import ChatWrapper from './styles';

import {
    AvatarWrapper,
    Avatar,
    InfoWrapper,
    ChatName,
    ChatLastMessage,
    LastMessageTime,
} from './styles';

import { AppContext } from '../../context/AppContext';
import { actionTypes } from '../../context/userReducer';

interface ChatProps {
    id: string;
    avatar: string;
    chatName: string;
    chatLastMessage: string;
    lastMessageTime: number;
    isSelected: boolean;
}

const Chat: FunctionComponent<ChatProps> = ({
    avatar,
    chatName,
    chatLastMessage,
    lastMessageTime,
    id,
}) => {
    const { state, dispatch } = useContext(AppContext);

    return (
        <Link
            to={`/chat/${id}`}
            style={{
                textDecoration: 'none',
                width: '97%',
                padding: 0,
                margin: 0,
            }}
        >
            <ChatWrapper
                isSelected={state.chatId === id ? true : false}
                onClick={() =>
                    dispatch({ type: actionTypes.SET_CHAT_ID, chatId: id })
                }
            >
                <AvatarWrapper>
                    <Avatar src={avatar} />
                </AvatarWrapper>

                <InfoWrapper>
                    <ChatName>{chatName}</ChatName>
                    <ChatLastMessage>{chatLastMessage}</ChatLastMessage>
                </InfoWrapper>

                <LastMessageTime>{lastMessageTime} min.</LastMessageTime>
            </ChatWrapper>
        </Link>
    );
};

export default Chat;
