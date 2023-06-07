import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslate from "./locales/en.json";
import uaTranslate from "./locales/ua.json";

i18next
    .use(initReactI18next)
    .init({
        resources: {
            en: {translation: enTranslate},
            ua: {translation: uaTranslate},
        },
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    })

export default i18next