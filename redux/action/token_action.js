
const TOKEN_STORE = 'token_Store/TOKEN_STORE';
const TOKEN_DESTROY = 'token_Store/TOKEN_DESTROY';

export const Token_Store = (get_Token) => ({ type: TOKEN_STORE, payload: get_Token});
export const Token_Destroy = () => ({ type: TOKEN_DESTROY });

const initialState = {
    token: '',
};

const token_Store = (state = initialState, action) => {
    switch (action.type) {
        case TOKEN_STORE:
            return {
                ...state,
                token: action.payload
            };
        case TOKEN_DESTROY:
            return {
                ...state,
                token: ''
            };

        default:
            return { ...state };
    }
}

export default token_Store;