import React, { FunctionComponent, useState } from 'react';

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
}) => {
    const [isSelected, setIsSelected] = useState(false);

    return (
        <ChatWrapper isSelected={isSelected} onClick={() => setIsSelected(!isSelected)}>
            <AvatarWrapper>
                <Avatar src={avatar} />
            </AvatarWrapper>

            <InfoWrapper>
                <ChatName>{chatName}</ChatName>
                <ChatLastMessage>{chatLastMessage}</ChatLastMessage>
            </InfoWrapper>

            <LastMessageTime>{lastMessageTime} min.</LastMessageTime>
        </ChatWrapper>
    );
};

export default Chat;
