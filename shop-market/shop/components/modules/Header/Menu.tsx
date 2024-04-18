import { $menuIsOpen } from "@/context/modals";
import { useLang } from "@/hooks/useLang";
import { useUnit } from "effector-react";
import { useState } from "react";

const Menu = () => {
    const [showCatalogList, setShowCatalogList] = useState(false);
    const [showBuyersList, setShowBuyersList] = useState(false);
    const [showContactsList, setShowContactsList] = useState(false);
    const menuIsOpen = useUnit($menuIsOpen);
    const {lang, translations} = useLang();

    return ( <nav className={`nav-menu ${menuIsOpen ? 'open' : 'close'}`}>
        <h1>menu</h1>
    </nav> );
}
 
export default Menu;