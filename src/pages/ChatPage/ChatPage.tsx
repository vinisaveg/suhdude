import React, { FunctionComponent } from 'react';

import Page, { ChatsWrapper } from './styles';

import Chat from '../../components/Chat/Chat.component';

const ChatPage: FunctionComponent = () => {
    return (
        <Page>
            <ChatsWrapper>
                <Chat
                    avatar="https://vignette.wikia.nocookie.net/rickemorty/images/d/dc/4469093-screen_shot_2015-03-25_at_5.13.24_pm_copy.jpg/revision/latest/top-crop/width/360/height/450?cb=20170918192423&path-prefix=pt-br"
                    chatName="Rick Sanchez"
                    chatLastMessage="Suh my dude! let's get riggity"
                    lastMessageTime={2}
                    isSelected={false}
                />
                <Chat
                    avatar="https://vignette.wikia.nocookie.net/rickandmorty/images/f/f9/Lawyer-NotLawyer_Morty.png/revision/latest?cb=20170402102431"
                    chatName="Lawyer Morty"
                    chatLastMessage="suuuh duuuude"
                    lastMessageTime={4}
                    isSelected={false}
                />
                <Chat
                    avatar="https://starbaseatlanta.com/wp-content/uploads/rmhpt5861.jpg"
                    chatName="Squanchy"
                    chatLastMessage="asuh squaaaanchy!"
                    lastMessageTime={4}
                    isSelected={false}
                />
                <Chat
                    avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSViPaPxGGOsTzsBRcyOLjHnIIgqLAMPJalQg&usqp=CAU"
                    chatName="Scary Terry"
                    chatLastMessage="suh my dude? how is it going"
                    lastMessageTime={8}
                    isSelected
                />
            </ChatsWrapper>
        </Page>
    );
};

export default ChatPage;
