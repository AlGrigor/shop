import Icons from "@/components/elements/icons/Icons";
import { IconsList } from "@/components/elements/icons/iconsList";
import Logo from "@/components/elements/Logo/Logo";
import SwitchLang from "@/components/elements/SwithLang/SwitchLang";
import { $menuIsOpen, closeMenu } from "@/context/modals";
import { removeOverflowHiddenToBody } from "@/lib/utils/common";
import { useUnit } from "effector-react";
import { useState } from "react";

const Menu = () => {
    const [showCatalogList, setShowCatalogList] = useState(false);
    const [showBuyersList, setShowBuyersList] = useState(false);
    const [showContactsList, setShowContactsList] = useState(false);
    const menuIsOpen = useUnit($menuIsOpen);

    function handleCloseMenu(){
        removeOverflowHiddenToBody();
        closeMenu();
    }

    return ( 
    <nav className={`nav-menu ${menuIsOpen ? 'open' : 'close'}`}>
        <div className="container nav-menu_container">
            <button className="bttn-reset bttn-close-menu svg-wrapper" onClick={handleCloseMenu}>
                <Icons name={IconsList.CLOSE} />
            </button>

            <div className="logo-wrapper">
                <Logo />
            </div>
            <div className="switch-lang-wrapper">
                <SwitchLang/>
            </div>
        </div>
    </nav> );
}
 
export default Menu;