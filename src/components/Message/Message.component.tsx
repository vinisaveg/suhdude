import React, { FunctionComponent } from 'react';

import MessageWrapper, { Avatar, AvatarWrapper, MessageBallon } from './styles';

interface messageProps {
    message: string;
    isUser: boolean;
}

const Message: FunctionComponent<messageProps> = ({ message, isUser }) => {
    return (
        <MessageWrapper isUser={isUser}>
            <AvatarWrapper isUser={isUser}>
                <Avatar src="https://avatars1.githubusercontent.com/u/55714745?s=460&u=65d2f7a9eff8bf32aa735c1e956495212ecab25d&v=4" />
            </AvatarWrapper>

            <MessageBallon isUser={isUser}>{message}</MessageBallon>
        </MessageWrapper>
    );
};

export default Message;
