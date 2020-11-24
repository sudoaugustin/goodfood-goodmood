import Image from './Image';
import HeroPattern from './HeroPattern';
import OutgoingIcon from '../icons/Outgoing';
import MessengerIcon from '../icons/Messenger';

const CTA = () => {
  const items = [
    { icon: <OutgoingIcon />, label: 'ဖုန်းခေါ်ပါ', href: 'tel:09964330780' },
    {
      icon: <MessengerIcon />,
      label: 'မက်ဆေ့ခ်ျပို့ပါ',
      href: 'https://www.facebook.com/messages/t/GoodFOODGOODMOOde',
    },
  ];
  return (
    <div className='space-x-4 py-4'>
      {items.map(({ href, icon, label }, key) => (
        <a
          key={key}
          href={href}
          className={
            'inline-flex tracking-wider items-center py-2 px-4 space-x-2 text-indigo-500 font-semibold cursor-pointer transition-all duration-500 ease-in-out focus:outline-none rounded-lg border-indigo-500 border-2 hover:bg-indigo-500 hover:text-white  transform hover:scale-110 motion-reduce:transform-none bg-white z-10 relative'
          }>
          <i>{icon}</i>
          <span>{label}</span>
        </a>
      ))}
    </div>
  );
};

const Left = () => (
  <section className='flex-1 px-4 md:px-8 flex flex-col justify-between'>
    <div className='space-y-8 text-center md:text-left'>
      <Image src='/img/logo.png' className='w-32 inline-block' />
      <h1 className='text-2xl md:text-4xl lg:text-5xl tracking-wide leading-relaxed font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text'>
        လူမျိုးဘာသာမရွေး စားသုံးနိုင်သော အိမ်ချက် မာလာရှမ်းကောအနှစ် နှင့် ဟော့ပေါ့ချဉ်စပ်အနှစ်
      </h1>
      <p className='text-gray-400 md:w-2/3 text-md font-semibold leading-relaxed bg-white z-10 relative'>
        မန္တလေး, ရန်ကုန်, နေပြည်တော်, ပြည်, မကွေး, စစ်ကိုင်း, မုံရွာ, တောင်ကြီး, ကန်ပက်လက်, ဖလမ်း,
        မြစ်ကြီးနား, ခင်ဦး, ပုဂံညောင်ဦး စသည့်အမြို့မြို့အနယ်နယ်တွင်ဝယ်ယူ ရရှိနိုင်ပါသည်
      </p>
      <CTA />
    </div>
    {/* <div className='absolute left-0 bottom-0'>
        <HeroPattern classes='text-blueGray-300 hidden lg:block' />
      </div> */}
  </section>
);

const Right = () => (
  <section className='flex-1 hidden lg:block pb-12'>
    <div className='absolute right-0 text-blueGray-300'>
      <HeroPattern />
      <HeroPattern />
    </div>
    <Image src='/img/collections.png' className='float-right h-full z-10 relative' />
  </section>
);

export default () => (
  <div className='py-4 h-full overflow-y-hidden flex justify-between bg-white border-t-4 md:border-t-8 border-pink-600'>
    <Left />
    <Right />
  </div>
);
