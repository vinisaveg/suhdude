import React, { FunctionComponent, useEffect, useState } from 'react';

import Page, { ChatsWrapper } from './styles';
import Chat from '../../components/Chat/Chat.component';

import database from '../../environment/firebase';

interface ChatType {
    id: string;
    data: firebase.firestore.DocumentData;
}

const ChatPage: FunctionComponent = () => {
    const [chats, setChats] = useState<Array<ChatType>>([]);

    useEffect(() => {
        database.collection('chats').onSnapshot((snapshot) => {
            let newChats = snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }));

            setChats(newChats);
        });
    }, []);

    return (
        <Page>
            <ChatsWrapper>
                {chats.map((chat) => (
                    <Chat
                        id={chat.id}
                        key={chat.id}
                        avatar="https://vignette.wikia.nocookie.net/rickemorty/images/d/dc/4469093-screen_shot_2015-03-25_at_5.13.24_pm_copy.jpg/revision/latest/top-crop/width/360/height/450?cb=20170918192423&path-prefix=pt-br"
                        chatName={chat.data.name}
                        chatLastMessage="Suh my dude! let's get riggity"
                        lastMessageTime={2}
                        isSelected={false}
                    />
                ))}
            </ChatsWrapper>
        </Page>
    );
};

export default ChatPage;
