import React, { FunctionComponent, useState } from 'react';
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
    const [isSelected, setIsSelected] = useState(false);

    return (
        <Link
            to={`/chat/${id}`}
            style={{ textDecoration: 'none', width: '97%', padding: 0, margin: 0 }}
        >
            <ChatWrapper
                isSelected={isSelected}
                onClick={() => setIsSelected(!isSelected)}
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
