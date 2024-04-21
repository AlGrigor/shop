import { useLang } from '@/hooks/useLang';
import Link from 'next/link';
import './logo.scss';
import Image from 'next/image';

const Logo = () => {
  const { lang, translations } = useLang();
  return (
    <Link className='logo' href='/'>
      <Image src='/img/Logo.svg' alt='Logo shop' />
      <span>{translations[lang].logo}</span>
    </Link>
  );
};

export default Logo;
