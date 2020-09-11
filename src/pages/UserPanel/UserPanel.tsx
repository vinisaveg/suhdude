import React, { FunctionComponent } from 'react';
import Panel, { Avatar, AvatarWrapper } from './styles';

const UserPanel: FunctionComponent = () => {
    return (
        <Panel>
            <AvatarWrapper>
                <Avatar src="https://avatars1.githubusercontent.com/u/55714745?s=460&u=65d2f7a9eff8bf32aa735c1e956495212ecab25d&v=4" />
            </AvatarWrapper>

            {/* User options button */}
        </Panel>
    );
};

export default UserPanel;
