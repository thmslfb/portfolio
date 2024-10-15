export const AvailabilityStatus = () => {
  return (
    <div className='flex items-center space-x-3 mb-6'>
      <span className='relative flex h-3 w-3'>
        <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00A34C] opacity-75'></span>
        <span className='relative inline-flex rounded-full h-3 w-3 bg-[#00A34C]'></span>
      </span>
      <p className='text-sm'>Available for new opportunities</p>
    </div>
  );
};
