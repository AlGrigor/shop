
import { useState } from "react";
import { useLang } from "@/hooks/useLang";
import { AnimatePresence, motion } from "framer-motion";
import Accordeon from "../Accordeon/Accordeon";
import { usePathname } from "next/navigation";
import MenuLinkItem from "./MenuLinkItem";

interface props {
    handleCloseMenu: () => void
}

const MenuContent = ({handleCloseMenu}: props) => {
    const [showCatalogList, setShowCatalogList] = useState(false);
    const [showBuyersList, setShowBuyersList] = useState(false);
    const [showContactsList, setShowContactsList] = useState(false);

    const { lang, translations } = useLang();

    const pathName = usePathname();

    const handleRedirectToCatalog = (path: string) => {
        if(pathName.includes('/catalog')){
            window.history.pushState({path}, '', path);
            window.location.reload();
        }
        handleCloseMenu();
    }

    const handleShowCatalogList = () => {
        setShowCatalogList(true)
        setShowBuyersList(false)
        setShowContactsList(false)
    }

    const clothLinks = [
        {
            id: 1,
            text: translations[lang].comparison['t-shirts'],
            href: '/catalog/cloth?offset=0&type=t-shirts',
        },
        {
            id: 2,
            text: translations[lang].comparison['long-sleeves'],
            href: '/catalog/cloth?offset=0&type=long-sleeves',
        },
        {
            id: 3,
            text: translations[lang].comparison.hoodie,
            href: '/catalog/cloth?offset=0&type=hoodie',
        },
        {
            id: 4,
            text: translations[lang].comparison.outerwear,
            href: '/catalog/cloth?offset=0&type=outerwear',
        },
    ]

    const accessoriesLinks = [
        {
            id: 1,
            text: translations[lang].comparison.bags,
            href: '/catalog/accessories?offset=0&type=bags',
        },
        {
            id: 2,
            text: translations[lang].comparison.headdress,
            href: '/catalog/accessories?offset=0&type=headdress',
        },
        {
            id: 3,
            text: translations[lang].comparison.umbrella,
            href: '/catalog/accessories?offset=0&type=umbrella',
        },
    ]

    const souvenirsLinks = [
        {
            id: 1,
            text: translations[lang].comparison['business-souvenirs'],
            href: '/catalog/souvenirs?offset=0&type=business-souvenirs',
        },
        {
            id: 2,
            text: translations[lang].comparison['promotional-souvenirs'],
            href: '/catalog/souvenirs?offset=0&type=promotional-souvenirs',
        },
    ]

    const officeLinks = [
        {
            id: 1,
            text: translations[lang].comparison.notebook,
            href: '/catalog/office?offset=0&type=notebook',
        },
        {
            id: 2,
            text: translations[lang].comparison.pen,
            href: '/catalog/office?offset=0&type=pen',
        },
    ]
    return (<ul className="list-reset nav-menu_list">
        <li className="nav-menu_list_item">
            <button className="bttn-reset nav-menu_list_item_bttn" onMouseEnter={handleShowCatalogList}>
                {translations[lang].main_menu.catalog}
            </button>
            <AnimatePresence>
                {showCatalogList && (
                    <motion.ul
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="list-reset nav-menu_accordeon" >
                        <li className="nav-menu_accordeon_item">
                            <Accordeon
                                title={translations[lang].main_menu.cloth}
                                titleClass="btt-reset nav-menu_accordeon_item_title">
                                <ul className="nav-menu_accordeon_item_list">
                                    {clothLinks.map(item => (
                                        <MenuLinkItem key={item.id} item={item} handleRedirectToCatalog={handleRedirectToCatalog}/>
                                    ))}
                                </ul>
                            </Accordeon>
                        </li>
                        <li className="nav-menu_accordeon_item">
                            <Accordeon
                                title={translations[lang].main_menu.accessories}
                                titleClass="btt-reset nav-menu_accordeon_item_title">
                                <ul className="nav-menu_accordeon_item_list">
                                    {accessoriesLinks.map(item => (
                                        <MenuLinkItem key={item.id} item={item} handleRedirectToCatalog={handleRedirectToCatalog}/>
                                    ))}
                                </ul>
                            </Accordeon>
                        </li>
                        <li className="nav-menu_accordeon_item">
                            <Accordeon
                                title={translations[lang].main_menu.souvenirs}
                                titleClass="btt-reset nav-menu_accordeon_item_title">
                                <ul className="nav-menu_accordeon_item_list">
                                    {souvenirsLinks.map(item => (
                                        <MenuLinkItem key={item.id} item={item} handleRedirectToCatalog={handleRedirectToCatalog}/>
                                    ))}
                                </ul>
                            </Accordeon>
                        </li>
                        <li className="nav-menu_accordeon_item">
                            <Accordeon
                                title={translations[lang].main_menu.office}
                                titleClass="btt-reset nav-menu_accordeon_item_title">
                                <ul className="nav-menu_accordeon_item_list">
                                    {officeLinks.map(item => (
                                        <MenuLinkItem key={item.id} item={item} handleRedirectToCatalog={handleRedirectToCatalog}/>
                                    ))}
                                </ul>
                            </Accordeon>
                        </li>
                    </motion.ul>
                )}
            </AnimatePresence>
        </li>
        <li className="nav-menu_list_item"></li>
        <li className="nav-menu_list_item"></li>
    </ul>);
}

export default MenuContent;