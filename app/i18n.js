import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslate from "./locales/en.json";
import uaTranslate from "./locales/ua.json";
import ruTranslate from "./locales/ru.json"

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {translation: enTranslate},
            ua: {translation: uaTranslate},
            ru: {translation: ruTranslate},
        },
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    })

export default i18n