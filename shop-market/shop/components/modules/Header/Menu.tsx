import Icons from '@/components/elements/icons/Icons';
import { IconsList } from '@/components/elements/icons/iconsList';
import Logo from '@/components/elements/Logo/Logo';
import SwitchLang from '@/components/elements/SwithLang/SwitchLang';
import { $menuIsOpen, closeMenu } from '@/context/modals';
import { removeOverflowHiddenToBody } from '@/lib/utils/common';
import { useUnit } from 'effector-react';
import MenuContent from './MenuContent';
import Image from 'next/image';

const Menu = () => {
  const menuIsOpen = useUnit($menuIsOpen);

  function handleCloseMenu() {
    removeOverflowHiddenToBody();
    closeMenu();
  }

  return (
    <nav className={`nav-menu ${menuIsOpen ? 'open' : 'close'}`}>
      <div className='container nav-menu_container'>
        <Image src='/img/menuBg.svg' alt='bg' className='bg' />
        <button
          className='bttn-reset bttn-close-menu svg-wrapper'
          onClick={handleCloseMenu}
        >
          <Icons name={IconsList.CLOSE} />
        </button>

        <div className='logo-wrapper'>
          <Logo />
        </div>
        <div className='switch-lang-wrapper'>
          <SwitchLang />
        </div>
        <div className='menu-content-wrapper'>
          <MenuContent handleCloseMenu={handleCloseMenu} />
        </div>
      </div>
    </nav>
  );
};

export default Menu;
