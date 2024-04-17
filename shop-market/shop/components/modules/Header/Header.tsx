'use client'

import Logo from "@/components/elements/Logo/Logo";
import { useLang } from "@/hooks/useLang";
import Link from "next/link";
import "@/app/global-styles/header.scss"
import { IconsList } from "@/components/elements/icons/iconsList";
import Icons from "@/components/elements/icons/Icons";

const Header = () => {
    const { lang, translations } = useLang();

    return (<header className="header">
        <div className="container header_container">
            <button className="bttn-reset header_burger">
                <Icons name={IconsList.BURGER} />
                {translations[lang].header.menu_btn}
            </button>
            <div className="header_logo">
                <Logo />
            </div>
            <ul className="header_links list-reset">
                <li className="header_links_item header_links_item--search">
                    <button className="bttn-reset header_links_item_bttn" >
                        <Icons name={IconsList.SEARCH} />
                    </button>
                </li>
                <li className="header_links_item header_links_item--favorites">
                    <Link href="/favorites" className="bttn-reset header_links_item_bttn" >
                        <Icons name={IconsList.FAVORITES} />
                    </Link>
                </li>
                <li className="header_links_item header_links_item--compare">
                    <Link href="/comparison" className="bttn-reset header_links_item_bttn" >
                        <Icons name={IconsList.COMPARE} />
                    </Link>
                </li>
                <li className="header_links_item header_links_item--cart">
                    <Link href="/cart" className="bttn-reset header_links_item_bttn" >
                        <Icons name={IconsList.CART} />
                    </Link>
                </li>
                <li className="header_links_item header_links_item--profile">
                    <Link href="/profile" className="bttn-reset header_links_item_bttn" >
                        <Icons name={IconsList.PROFILE} />
                    </Link>
                </li>
            </ul>
        </div>
    </header>);
}

export default Header;