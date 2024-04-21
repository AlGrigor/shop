import { IMenuLinkItem } from '@/types/modules';
import Link from 'next/link';

const MenuLinkItem = ({ item, handleRedirectToCatalog }: IMenuLinkItem) => {
  const onredirect = () => handleRedirectToCatalog(item.href);

  return (
    <li key={item.id} className='nav-menu_accordeon_item_list_item'>
      <Link
        href={item.href}
        className='nav-menu_accordeon_item_list_item_link'
        onClick={onredirect}
      >
        {item.text}
      </Link>
    </li>
  );
};

export default MenuLinkItem;
