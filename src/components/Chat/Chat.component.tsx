import React, { FunctionComponent } from 'react';
import ChatWrapper from './styles';
import { AvatarWrapper, Avatar } from './styles';

interface ChatProps {
    avatar: string;
    chatName: string;
}

const Chat: FunctionComponent<ChatProps> = ({ avatar, chatName }) => {
    return (
        <ChatWrapper>
            <AvatarWrapper>
                <Avatar src="https://avatars1.githubusercontent.com/u/55714745?s=460&u=65d2f7a9eff8bf32aa735c1e956495212ecab25d&v=4" />
            </AvatarWrapper>
        </ChatWrapper>
    );
};

export default Chat;
