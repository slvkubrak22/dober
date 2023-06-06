import { createStore } from 'redux';

const initialState = {
  language: 'en', // Значение по умолчанию - английский
  translations: {
    en: {
        h1: 'Secure communication platform',
    },
    ru: {
        h1: 'Платформа защищенного общения',
    },
    ua: {
        h1: 'Платформа захищеного спілкування',
    }
  }
};



// Действия (actions)
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

export function changeLanguage(language) {
  return {
    type: CHANGE_LANGUAGE,
    payload: language,
  };
}

// Редуктор (reducer)

function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
}

// Создание Redux Store
const store = createStore(reducer);

export default store;