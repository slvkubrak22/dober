export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

export const changeLanguage = (language) => {
  return {
    type: CHANGE_LANGUAGE,
    payload: language
  };
};

const initialState = {
  language: 'en',
  texts: {
    en: {
      home: 'Home',
      product: 'Product',
      features: 'Features',
      security: 'Security',
      companies: 'For Companies',
      help: 'Help',
      donate: 'Donate',
      download: 'Download',
      language: 'EN',
      newText: 'English'
    },
    ru: {
      home: 'Главная',
      product: 'Продукт',
      features: 'Возможности',
      security: 'Безопасность',
      companies: 'Для компаний',
      help: 'Помощь',
      donate: 'Пожертвовать',
      download: 'Скачать',
      language: 'RU',
      newText: 'Russian'
    },
    ua: {
      home: 'Головна',
      product: 'Продукт',
      features: 'Можливості',
      security: 'Безпека',
      companies: 'Для компаній',
      help: 'Довідка',
      donate: 'Пожертвувати',
      download: 'Завантажити',
      language: 'UA',
      newText: 'Ukrainian'
    }
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload
      };
    default:
      return state;
  }
};

export default reducer;