import Image from './Image';
export default () => {
  const items = [
    { name: 'မာလာရှမ်းကောအနှစ်', price: '၃၀၀၀ ကျပ်' },
    { name: 'ဟော့ပေါ့ချဉ်စပ်အနှစ်', price: '၃၀၀၀ ကျပ်' },
    { name: 'မာလာဟင်းအနှစ်', price: '၃၀၀၀ ကျပ်' },
    { name: 'မာလာအာလူးမွကြွပ်', price: ' ၁၀၀၀ ကျပ်' },
    { name: 'မာလာငါးရေခွံမွကြွပ်', price: '၁၀၀၀ ကျပ်' },
    { name: 'အားလူးမွကြွပ် (သဘာဝအရသာ)', price: '၁၀၀၀ ကျပ်' },
  ];
  return (
    <div className='text-center py-10 px-4 md:px-8 bg-orange-100'>
      <h3 className='text-3xl tracking-wide font-bold text-orange-500 py-3'>
        ရနိုင်သည့်အစားအစာများ
      </h3>
      <span className='text-red-400 rounded-full mt-1 mb-6 py-1 px-2 text-xs font-bold tracking-wider inline-block'>
        စျေးနှုန်းသည်တည်နေရာနှင့်အချိန်ပေါ် မူတည်၍ ပြောင်းလဲနိုင်သည်
      </span>
      <div className='p-2 md:p-4 flex justify-center flex-wrap'>
        {items.map(({ name, price }, index) => (
          <div
            className='inline-flex flex-col flex-shrink-0 justify-between shadow-lg hover:shadow-2xl transform duration-300 m-2 md:m-4 ease-in-out hover:-translate-y-2 rounded-lg p-2 w-48 h-60 bg-white'
            key={index}>
            <Image src={`/img/item-${index + 1}.png`} className='rounded-lg' />
            <h5 className='text-md font-bold text-gray-700 text-left p-2'>{name}</h5>
            <h6 className='text-sm font-extrabold text-emerald-500 p-2 text-right'>{price}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};
