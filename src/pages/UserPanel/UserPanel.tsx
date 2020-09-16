import React, { FunctionComponent, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import Panel, { Avatar, AvatarWrapper } from './styles';

const UserPanel: FunctionComponent = () => {
    const { state } = useContext(AppContext);

    return (
        <Panel>
            <AvatarWrapper>
                <Avatar
                    src={
                        state.user
                            ? state.user.photoURL
                            : 'https://images-americanas.b2w.io/produtos/01/00/img/1522766/5/1522766530_1GG.jpg'
                    }
                />
            </AvatarWrapper>
        </Panel>
    );
};

export default UserPanel;
