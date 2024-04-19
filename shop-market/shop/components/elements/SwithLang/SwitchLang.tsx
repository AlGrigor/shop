import { AllowedLangs } from "@/constants/lang";
import { setLang } from "@/context/lang";
import { useLang } from "@/hooks/useLang";
import "./switch-lang.scss";

const SwitchLang = () => {
    const { lang, translations } = useLang();

    function handleSwitchLang(lang: string) {
        setLang(lang as AllowedLangs);
        localStorage.setItem('lang', JSON.stringify(lang));
    }

    function handleSwithLangToRu() {
        handleSwitchLang('ru');
    }
    function handleSwithLangToEn() {
        handleSwitchLang('en');
    }

    return (<div className="switch-lang">
        <button className={`bttn-reset switch-lang_bttn ${lang === 'ru' ? 'active' : ''}`} onClick={handleSwithLangToRu}>
            Ru
        </button>
        <button className={`bttn-reset switch-lang_bttn ${lang === 'en' ? 'active' : ''}`} onClick={handleSwithLangToEn}>
            En
        </button>
    </div>);
}

export default SwitchLang;