import MailIcon from '../icons/Mail';
import PhoneIcon from '../icons/Phone';
import AddressIcon from '../icons/Address';
import FacebookIcon from '../icons/Facebook';
import Image from './Image';

export default props => {
  const links = [
    { label: 'လမ်း ၈၀|၇ x ၈ လမ်းကြား|မန္တလေးမြို့', icon: <AddressIcon /> },
    { label: '09 964 330780', icon: <PhoneIcon />, href: 'tel:09964330780' },
    {
      label: 'Facebook',
      icon: <FacebookIcon />,
      href: 'https://www.facebook.com/GoodFOODGOODMOOde/',
    },
    { label: 'pyaemonkyaw92@gmail.com', icon: <MailIcon />, href: 'mailto:pyaemonkyaw92@gmail.com' },
  ];
  return (
    <footer className=' bg-coolGray-50 w-full h-full py-6 md:py-12 px-4 md:px-8 flex md:justify-between'>
      <Image className=' w-32 hidden md:inline-block' src='/img/logo.png' />
      <section className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'>
        {links.map(({ icon, label, href }, index) => (
          <a
            href={href}
            className='text-coolGray-500 text-xl font-medium cursor-pointer hover:text-coolGray-900 duration-200 transition-colors flex items-center space-x-1 px-2'
            key={index}>
            {icon}
            <p className='text-sm'>{label}</p>
          </a>
        ))}
      </section>
    </footer>
  );
};
