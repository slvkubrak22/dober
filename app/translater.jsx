import { useSelector, useDispatch } from "react-redux";
import { changeLanguage } from "./actions";

export function changeCurrentLanguage() {
    const dispatch = useDispatch();
    const language = useSelector((state) => state.language);
    const texts = useSelector((state) => state.texts[language]);
  
    const handleLanguageChange = (selectedLanguage) => {
        dispatch(changeLanguage(selectedLanguage));
    };
  
    return {
        language,
        texts,
        handleLanguageChange,
    };
}