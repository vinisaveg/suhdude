import React, { FunctionComponent } from 'react';
import MessageWrapper, {
    Avatar,
    AvatarWrapper,
    MessageBallon,
    Time,
} from './styles';

interface messageProps {
    message: string;
    timeStamp: any;
    isUser: boolean;
}

const Message: FunctionComponent<messageProps> = ({
    message,
    isUser,
    timeStamp,
}) => {
    let timeStampHour = new Date(timeStamp?.toDate()).getHours();
    let timeStampMinute = new Date(timeStamp?.toDate()).getMinutes();
    let timeStampMiliSeconds = new Date(timeStamp?.toDate()).getMilliseconds();

    return (
        <MessageWrapper isUser={isUser}>
            <AvatarWrapper isUser={isUser}>
                <Avatar
                    src={`https://avatars.dicebear.com/api/avataaars/${timeStampMiliSeconds.toString()}.svg?mood[]=happy`}
                />
            </AvatarWrapper>

            <MessageBallon isUser={isUser}>
                {message}

                <Time>{`${timeStampHour}:${timeStampMinute}`}</Time>
            </MessageBallon>
        </MessageWrapper>
    );
};

export default Message;
