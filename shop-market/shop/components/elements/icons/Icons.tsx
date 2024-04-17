import { IconsList } from "./iconsList";
import Burger from "@/public/icons/Burger";
import Search from "@/public/icons/Search";
import Favorites from "@/public/icons/Favorites";
import Compare from "@/public/icons/Compare";
import Cart from "@/public/icons/Cart";
import Profile from "@/public/icons/Profile";

interface IconsProps {
    name: IconsList;
}

const Icons = ({ name }: IconsProps) => {

    switch (name) {
        case IconsList.BURGER:
            return <Burger />
            break;
        case IconsList.SEARCH:
            return <Search />
            break;
        case IconsList.FAVORITES:
            return <Favorites />
            break;

        case IconsList.COMPARE:
            return <Compare />
            break;

        case IconsList.CART:
            return <Cart />
            break;
        case IconsList.PROFILE:
            return <Profile />
            break;
    }
}

export default Icons;
