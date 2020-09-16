export const INITIAL_STATE = {
    user: null,
    chatId: null,
};

export const actionTypes = {
    SET_USER: 'SET_USER',
    SET_CHAT_ID: 'SET_CHAT_ID',
};

const appReducer = (state: any, action: any) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            };
        case actionTypes.SET_CHAT_ID:
            return {
                ...state,
                chatId: action.chatId,
            };
        default:
            return state;
    }
};

export default appReducer;
