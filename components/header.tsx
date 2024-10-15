import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export const Header = () => {
  return (
    <header className='flex items-center space-x-4 mb-6 md:mb-8 w-fit'>
      <Avatar className='h-11 w-11'>
        <AvatarImage src='https://github.com/thmslfb.png' alt='@thmslfb' />
        <AvatarFallback>TH</AvatarFallback>
      </Avatar>
      <div className='space-y-1'>
        <p className='h-4 text-white font-medium'>Thomas Lefebvre</p>
        <p className='h-4'>Amiens</p>
      </div>
    </header>
  );
};
