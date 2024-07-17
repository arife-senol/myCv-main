import { TOGGLE_THEME, TOGGLE_LANGUAGE, FETCH_SUCCESS, FETCH_LOADING} from './action.js';

const localTheme = localStorage.getItem('theme');
const localLanguage = localStorage.getItem('language');

//localim nullsa light ve en getir, locale değer gelirse parse et ve initial yap.
const initialState = {
    theme: localTheme !== null ? JSON.parse(localTheme) : "light",
    language: localLanguage === null ? "EN" : JSON.parse(localLanguage),
    data: [],
    loading: true,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return {
                ...state,
                theme: state.theme === "light" ? "dark" : "light",
            };
        case TOGGLE_LANGUAGE:
            return {
                ...state,
                language: state.language === "EN" ? "TR" : "EN",
            };
        case FETCH_SUCCESS: 
            return {
                ...state,
                data: {
                    en: action.payload.en,
                    tr: action.payload.tr
                }
            }
        case FETCH_LOADING:
            return {
                ...state,
                loading: action.payload
            }

        default:
            return state;
    }
};

export default reducer;
