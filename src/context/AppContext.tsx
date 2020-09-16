import React, { createContext, FunctionComponent, useReducer } from 'react';

import userReducer, { INITIAL_STATE } from './userReducer';

interface AppContextProps {
    state: any;
    dispatch: any;
}

export const AppContext = createContext<AppContextProps>({
    state: null,
    dispatch: null,
});

const ContextProvider: FunctionComponent = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export default ContextProvider;
