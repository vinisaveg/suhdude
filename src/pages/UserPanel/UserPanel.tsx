import React, { FunctionComponent, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import Panel, { Avatar, AvatarWrapper } from './styles';

const UserPanel: FunctionComponent = () => {
    const { state } = useContext(AppContext);

    return (
        <Panel>
            <AvatarWrapper>
                <Avatar src={state.user ? state.user.photoURL : ''} />
            </AvatarWrapper>
        </Panel>
    );
};

export default UserPanel;
